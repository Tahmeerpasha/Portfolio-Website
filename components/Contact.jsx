import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import config from '../public/data/config';

function Contact() {
  return (
    <section id="contact" className="py-24" aria-label="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-label mb-4">Contact</p>
        <h2 className="text-heading mb-4">Let&apos;s talk</h2>
        <p className="text-muted mb-12 max-w-xl leading-relaxed">
          I&apos;m open to Backend / Full-Stack SDE roles at product-based
          companies. If you&apos;d like to connect, feel free to reach out
          through the form or directly via email.
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card space-y-5">
              <div>
                <p className="text-heading font-semibold text-base">
                  {config.name}
                </p>
                <p className="text-accent text-sm mt-0.5">{config.title}</p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors group"
                  aria-label="Email"
                >
                  <Mail size={15} className="shrink-0 group-hover:text-accent" />
                  {config.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={15} className="shrink-0" />
                  {config.location}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                  Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                  <a
                    href={config.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="lg:col-span-3 card">
            <form
              action={config.contactFormAction}
              method="POST"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono text-muted uppercase tracking-widest"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="Name"
                    required
                    className="bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder-border focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono text-muted uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="Email"
                    required
                    className="bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder-border focus:outline-none focus:border-accent transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-mono text-muted uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="Subject"
                  required
                  className="bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder-border focus:outline-none focus:border-accent transition-colors"
                  placeholder="SDE opportunity at ..."
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono text-muted uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="Message"
                  rows={5}
                  required
                  className="bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder-border focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Hi Tahmeer, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-16">
          <Link
            href="/#home"
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;