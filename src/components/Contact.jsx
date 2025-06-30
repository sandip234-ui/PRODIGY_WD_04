import React, { useState } from 'react';
import { Send, User, MessageCircle, CheckCircle2, Sparkles, Mail } from 'lucide-react';

// FormField as a separate component
const FormField = ({ icon: Icon, label, name, type = "text", rows, placeholder, value, onChange }) => (
  <div className="relative group">
    <label className="block mb-2 text-sm font-medium text-white/90">
      <Icon className="inline w-4 h-4 mr-2" />
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-white border resize-none bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:border-purple-400"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 text-white border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:border-purple-400"
      />
    )}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every((field) => field.trim() !== '');
    if (!isFormValid) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="relative px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" id="contact">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-green-500/20 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Message Sent Successfully!
          </h2>
          <p className="mb-8 text-xl text-white/80">
            Thank you for reaching out! I'll get back to you soon.
          </p>
          <div className="flex justify-center">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" id="contact">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 rounded-2xl">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-purple-200">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6 border bg-white/10 backdrop-blur-lg rounded-3xl border-white/20"
          >
            <FormField
              icon={User}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <FormField
              icon={Mail}
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <FormField
              icon={MessageCircle}
              label="Message"
              name="message"
              type="textarea"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, goals, timeline, or any questions you have..."
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 text-lg font-semibold text-white transition-transform bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>

          {/* 3D Image */}
          <div className="flex justify-center order-last lg:order-none">
            <img
              src="assets/Messaging-amico.svg"
              alt="3D Contact Image"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;