import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiConnector } from '../apiConnector';
import { contactusEndpoint } from '../api';
import { gradientButton, sectionHeading, sectionUnderline } from '../ui';

const CONTACT_EMAIL = 'a3148700@gmail.com';

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-lg bg-neutral-900 text-white placeholder-gray-500 border focus:outline-none focus:ring-2 ${
    hasError ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 focus:ring-blue-500'
  }`;

function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: '', email: '', message: '' } });

  const submitContactForm = async (data) => {
    setSubmitStatus(null);
    try {
      const response = await apiConnector('POST', contactusEndpoint.CONTACT_US_API, data);
      if (!response?.data?.success) {
        setSubmitStatus({
          success: false,
          message: response?.data?.message || 'Failed to send message.',
        });
        return;
      }
      setSubmitStatus({ success: true, message: 'Message sent! I will get back to you soon.' });
      // Only clear the form when the message actually went through.
      reset();
    } catch (error) {
      const serverMessage = error?.response?.data?.message;
      setSubmitStatus({
        success: false,
        message: serverMessage || 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 px-4 sm:px-6 py-16">
      <div className="w-full max-w-4xl">
        <h2 className={sectionHeading}>Contact Me</h2>
        <div className={sectionUnderline} aria-hidden="true" />

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-blue-400 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Location</h3>
                <p className="text-white">Pune, Maharashtra, India</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Abhishekghadge900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-ghadge-3857032a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit(submitContactForm)} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-blue-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(errors.name)}
                  {...register('name', {
                    required: 'Please enter your name.',
                    maxLength: { value: 100, message: 'Name must be 100 characters or fewer.' },
                  })}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-blue-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(errors.email)}
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
                  })}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can I help?"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={inputClass(errors.message)}
                  {...register('message', {
                    required: 'Please enter a message.',
                    maxLength: { value: 3000, message: 'Message must be 3000 characters or fewer.' },
                  })}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className={gradientButton} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 rounded-lg ${
                    submitStatus.success
                      ? 'bg-green-900/40 border border-green-700 text-green-200'
                      : 'bg-red-900/40 border border-red-700 text-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
