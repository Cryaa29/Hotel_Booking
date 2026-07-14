"use client";

import { useState } from "react";

const channels = [
  {
    label: "Email",
    value: "royal@gmail.com",
    note: "Best for booking questions",
  },
  {
    label: "Phone",
    value: "+855 12 242 460",
    note: "Mon-Sat, 9am-6pm",
  },
  {
    label: "Office",
    value: "Battambang, Cambodia",
    note: "By appointment only",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("sending");


      await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network delay

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <section className="bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-light mb-6">
            សូមទាក់ទងមកយើង
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            យើងរីករាយក្នុងការបម្រើ
            <br />
            <span className="italic text-gold-light">We're listening.</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/70 text-lg">
            យើងរីករាយក្នុងការជួយឆ្លើយសំណួរ និងផ្តល់ការគាំទ្រគ្រប់ពេលដែលអ្នកត្រូវការ។ 
            មិនថាអ្នកចង់សាកសួរអំពីការកក់ កន្លែងស្នាក់នៅ ឬសេវាកម្មរបស់យើង ក្រុមការងាររបស់យើងតែងតែរួចរាល់ក្នុងការជួយអ្នក។ 
            សូមទាក់ទងមកយើងតាមទូរស័ព្ទ អ៊ីមែល 
            ឬបំពេញទម្រង់ទំនាក់ទំនងនៅលើគេហទំព័រ ហើយយើងនឹងឆ្លើយតបជូនអ្នកឱ្យបានឆាប់រហ័ស។
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="bg-white rounded-2xl border border-ink/10 overflow-hidden">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-ink/15">
            {channels.map((c) => (
              <div key={c.label} className="p-8 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-sage mb-2">
                  {c.label}
                </p>
                <p className="font-display text-xl text-ink">{c.value}</p>
                <p className="text-ink/60 text-sm mt-2">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl text-ink mb-4">
                Send a message
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-md">
                សូមផ្ញើសំណួរ មតិយោបល់ ឬសំណើរបស់អ្នកមកកាន់យើង។ យើងនឹងឆ្លើយតបឱ្យបានឆាប់រហ័ស និងផ្តល់ជំនួយដល់អ្នកដោយយកចិត្តទុកដាក់
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-ink/10 p-6 sm:p-8 space-y-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-sage block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-2.5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-sage block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-2.5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-sage block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-ink/15 bg-cream px-4 py-2.5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              {status === "sent" && (
                <p className="text-sm text-sage">
                  Thanks — your message has been sent. We'll get back to you soon.
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full rounded-full bg-ink text-cream py-2.5 font-body text-sm transition hover:bg-ink-light disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}