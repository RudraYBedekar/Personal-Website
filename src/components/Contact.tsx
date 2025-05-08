import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'rudra.bedekar03@gmail.com',
      link: 'mailto:rudra.bedekar01@gmail.com'
    },
    {
      icon: <Mail size={24} />,
      title: 'University Email',
      value: 'rbedekar@gmu.edu',
      link: 'mailto:rbedekar@gmu.edu'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '(202) 309-2655',
      link: 'tel:+12023092655'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Fairfax, VA',
      link: 'https://maps.google.com/?q=Fairfax,+VA'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = 'Invalid email';
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      toast.success("Message sent successfully!");

      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm always open to new opportunities and interesting projects. Feel free to contact me if you have any questions or want to work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">Let's connect! Reach out through any of the following channels.</p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.link} className="flex items-center group" target={item.title === 'Location' ? '_blank' : undefined} rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}>
                    <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-4 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.title}</p>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'github', url: 'https://github.com/RudraYBedekar' },
                    { name: 'linkedin', url: 'https://www.linkedin.com/in/rudra-bedekar/' }
                  ].map((social, index) => (
                    <a key={index} href={social.url} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-teal-600 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label={`Follow on ${social.name.charAt(0).toUpperCase() + social.name.slice(1)}`}>
                      <i className={`fab fa-${social.name} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input required type="text" id="name" name="name" value={formState.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500/40 dark:bg-gray-700 dark:text-white`} placeholder="John Doe" />
                    {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <input required type="email" id="email" name="email" value={formState.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500/40 dark:bg-gray-700 dark:text-white`} placeholder="john@example.com" />
                    {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input required type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500/40 dark:bg-gray-700 dark:text-white`} placeholder="Project Inquiry" />
                  {errors.subject && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea required id="message" name="message" rows={5} value={formState.message} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500/40 dark:bg-gray-700 dark:text-white`} placeholder="Your message here..." />
                  {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
