import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Contact({ socialLinks, contactEmail }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const hasEmailJsConfig = Boolean(serviceId && templateId && publicKey && contactEmail);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    window.setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2600);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!hasEmailJsConfig || isSending) return;

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: contactEmail
        },
        { publicKey }
      );
      setFormData({ name: "", email: "", message: "" });
      showToast("success", "Email sent successfully.");
    } catch {
      showToast("error", "Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <SectionTitle title="Contact" subtitle="Get In Touch" />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-300/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </label>
          <button
            type="submit"
            disabled={!hasEmailJsConfig || isSending}
            className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {!hasEmailJsConfig ? (
            <p className="mt-3 text-xs text-rose-500 dark:text-rose-300">
              Configure EmailJS keys in `.env` to enable automatic email sending.
            </p>
          ) : null}
        </form>

        <aside className="rounded-2xl border border-slate-300/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Connect</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Connect through professional platforms and collaboration channels.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-600 dark:text-slate-100"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-600 dark:text-slate-100"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </aside>
      </div>
      {toast.show ? (
        <div
          className={`fixed bottom-5 right-5 z-50 rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-lg ${
            toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"
          }`}
        >
          {toast.message}
        </div>
      ) : null}
    </AnimatedSection>
  );
}
