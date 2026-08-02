// src/components/sections/Contact.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeading from '../ui/SectionHeading.jsx'
import { profile, socials } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function Contact() {
  useScrollReveal('.contact-reveal', { distance: '12px', duration: 400 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === 'error') setStatus('idle')
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required.'
    if (!formData.email.trim()) return 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.'
    if (!formData.message.trim()) return 'Message is required.'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setErrorMessage(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')
    
    // Use .env variables - fallback to empty strings if missing during dev
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

    if (!serviceId || !templateId || !publicKey) {
      // In local dev without keys, mock success to allow UI testing
      console.warn('EmailJS keys are missing. Mocking success.')
      setTimeout(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }, 1000)
      return
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setErrorMessage('Failed to send message. Please try again later or email me directly.')
        setStatus('error')
      })
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container contact-reveal">
        <SectionHeading id="contact-heading">Contact</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Col: Direct Info */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-h3-mob md:text-h3 text-ink leading-tight">
                Let's get in touch
              </h3>
              <p className="font-sans text-body text-slate mt-4 max-w-sm">
                I'm currently open to software engineering and data science opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 font-sans text-body text-ink hover:text-navy transition-colors duration-fast w-fit"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-slate/20 rounded bg-slate/5 group-hover:border-navy/30 group-hover:bg-navy/5 transition-all duration-fast">
                  <i className="ri-mail-line text-lg" aria-hidden="true" />
                </div>
                <span>{profile.email}</span>
              </a>
              
              <a 
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-3 font-sans text-body text-ink hover:text-navy transition-colors duration-fast w-fit"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-slate/20 rounded bg-slate/5 group-hover:border-navy/30 group-hover:bg-navy/5 transition-all duration-fast">
                  <i className="ri-phone-line text-lg" aria-hidden="true" />
                </div>
                <span>{profile.phone}</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-small text-slate uppercase tracking-wider mb-4">Elsewhere</p>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map((social) => (
                  social.placeholder ? (
                    <span 
                      key={social.id}
                      className="w-10 h-10 flex items-center justify-center border border-slate/10 rounded bg-slate/5 text-slate/40 cursor-not-allowed"
                      title={`${social.label} (Coming Soon)`}
                    >
                      <i className={social.icon} aria-hidden="true" />
                    </span>
                  ) : (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-slate/20 rounded bg-slate/5 text-slate hover:border-brass hover:text-navy hover:bg-brass/10 transition-all duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                      aria-label={social.label}
                    >
                      <i className={social.icon} aria-hidden="true" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Form */}
          <div className="md:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="ledger-card bg-paper flex flex-col gap-6"
              noValidate
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-small text-ink font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-slate/5 border border-slate/25 rounded-md px-4 py-2.5 font-sans text-body text-ink focus:border-navy focus:bg-paper focus:ring-2 focus:ring-navy/10 focus:outline-none transition-all duration-200 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-small text-ink font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-slate/5 border border-slate/25 rounded-md px-4 py-2.5 font-sans text-body text-ink focus:border-navy focus:bg-paper focus:ring-2 focus:ring-navy/10 focus:outline-none transition-all duration-200 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-small text-ink font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  maxLength={500}
                  rows="4"
                  className="w-full bg-slate/5 border border-slate/25 rounded-md px-4 py-2.5 font-sans text-body text-ink focus:border-navy focus:bg-paper focus:ring-2 focus:ring-navy/10 focus:outline-none transition-all duration-200 resize-y disabled:opacity-50"
                  placeholder="How can I help you? (max 500 characters)"
                />
              </div>

              {/* Status Messages */}
              <div aria-live="polite" className="min-h-[24px]">
                {status === 'error' && (
                  <p className="font-sans text-small text-error flex items-center gap-2">
                    <i className="ri-error-warning-line" aria-hidden="true" />
                    {errorMessage}
                  </p>
                )}
                {status === 'success' && (
                  <p className="font-sans text-small text-success flex items-center gap-2">
                    <i className="ri-checkbox-circle-line" aria-hidden="true" />
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full sm:w-auto self-start mt-2 px-8 py-3 bg-navy text-paper font-sans font-medium rounded hover:bg-brass transition-colors duration-fast disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <i className="ri-check-line" aria-hidden="true" />
                    Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-line" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
