import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { projects, skillCategories, experienceItems } from '../data/portfolioData';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi there! I'm Rudra's AI assistant. Ask me about his projects, skills, or experience!",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        // Simulate bot thinking time
        setTimeout(() => {
            const botResponse = generateResponse(userMessage.text);
            setMessages(prev => [...prev, botResponse]);
        }, 600);
    };

    const generateResponse = (input: string): Message => {
        const lowerInput = input.toLowerCase();
        let responseText = "I'm not sure about that. Try asking about my projects, skills, contact info, or specific technologies like 'Python' or 'React'.";

        // Logic for matching keywords
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            responseText = "Hello! How can I help you today? You can ask me about my projects, skills, or experience.";
        }
        else if (lowerInput.includes('project')) {
            const projectTitles = projects.slice(0, 5).map(p => p.title).join(', ');
            responseText = `Here are some of my top projects: ${projectTitles}, and more! You can scroll down to the Projects section to see details, or ask me about a specific one.`;
        }
        else if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('technology')) {
            const categories = skillCategories.map(c => c.title).join(', ');
            responseText = `I have expertise in: ${categories}. Ask me about specific skills like 'Python' or 'Cloud'.`;
        }
        else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
            const recentRole = experienceItems[0];
            responseText = `My most recent role was as a ${recentRole.title} at ${recentRole.company} (${recentRole.year}). I focused on ${recentRole.description[0].toLowerCase()}`;
        }
        else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
            responseText = "You can contact me via the form in the Contact section, or email me directly at [Insert Email Here if public]. I'm open to opportunities!";
        }
        else {
            // Tech stack search
            const foundProjects = projects.filter(p =>
                p.tags.some(tag => lowerInput.includes(tag.toLowerCase())) ||
                p.title.toLowerCase().includes(lowerInput)
            );

            if (foundProjects.length > 0) {
                responseText = `I found ${foundProjects.length} project(s) related to "${input}": ${foundProjects.map(p => p.title).join(', ')}.`;
            } else {
                // Skill check
                const foundSkills = skillCategories.flatMap(c => c.skills).filter(s => s.toLowerCase().includes(lowerInput));
                if (foundSkills.length > 0) {
                    responseText = `Yes! I have experience with ${foundSkills.join(', ')}.`;
                }
            }
        }

        return {
            id: (Date.now() + 1).toString(),
            text: responseText,
            sender: 'bot',
            timestamp: new Date()
        };
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white dark:bg-gray-800 w-80 sm:w-96 h-96 rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 transform origin-bottom-right">
                    {/* Header */}
                    <div className="bg-teal-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot size={20} />
                            <span className="font-semibold">Portfolio Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-teal-700 p-1 rounded">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.sender === 'bot' && (
                                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center flex-shrink-0">
                                        <Bot size={16} className="text-teal-600 dark:text-teal-400" />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-teal-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                {msg.sender === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                                        <User size={16} className="text-gray-600 dark:text-gray-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask about skills, projects..."
                            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                        <button
                            type="submit"
                            disabled={!inputText.trim()}
                            className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                aria-label="Toggle chat"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default Chatbot;
