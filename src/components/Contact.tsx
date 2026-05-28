import { useRef, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import { contact } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [state, handleSubmit] = useForm('manozpjq');

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!');
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader
            title={contact.headline}
            subtitle={contact.subline}
            className="text-center [&_h2]:text-center [&_p]:mx-auto"
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-colors"
            >
              <ExternalLink size={16} />
              Resume
            </a>
          </div>

          <p className="text-center text-[11px] text-zinc-400 mb-8">{contact.footnote}</p>

          <div className="max-w-md mx-auto card-hover rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Role, team, or project..."
                className="w-full px-3 py-2 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60 transition-colors"
              >
                {state.submitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send <Send size={14} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-center gap-5">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
