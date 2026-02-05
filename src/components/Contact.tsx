
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const [state, handleSubmit] = useForm("manozpjq");

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'rudra.bedekar03@gmail.com',
      link: 'mailto:rudra.bedekar03@gmail.com'
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

  if (state.succeeded) {
    toast.success("Message sent successfully!");
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-gray-300 max-w-5xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-teal-500/20 rounded-lg text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <a href={item.link} className="text-gray-300 group-hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-bold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/RudraYBedekar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-teal-600 transition-colors"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rudra-bedekar-259728258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-teal-600 transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold hover:shadow-lg hover:from-teal-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Contact;
