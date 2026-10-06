import { useState, useRef } from "react";
import {
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { createWhatsAppUrl } from "../../data/contact";

const serviceOptions = [
  "House Cleans",
  "Deep Cleans",
  "End of Tenancy Cleans",
  "Other",
];

const contactMethods = ["Phone", "WhatsApp", "Email"];

const initialState = {
  name: "",
  phone: "",
  email: "",
  contactMethod: "",
  service: "",
  date: "",
  time: "",
  propertyType: "",
  rooms: "",
  message: "",
};

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.phone.trim()) errors.phone = "Phone number is required.";
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.service) errors.service = "Please select a service.";
  if (!fields.contactMethod)
    errors.contactMethod = "Please select your preferred contact method.";
  return errors;
}

export default function QuoteForm() {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const waMessage = createWhatsAppUrl(
    [
      "Hi Pretty Clean, I'd like to request a quote.",
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      fields.email && `Email: ${fields.email}`,
      `Service: ${fields.service || "a cleaning service"}`,
      fields.date && `Preferred date: ${fields.date}`,
      fields.time && `Preferred time: ${fields.time}`,
      fields.propertyType && `Property: ${fields.propertyType}`,
      fields.rooms && `Rooms: ${fields.rooms}`,
      fields.message && `Additional information: ${fields.message}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-charcoal/8 p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-teal/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-brand-teal" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-charcoal mb-3">
          Enquiry Prepared!
        </h2>
        <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-2 max-w-md mx-auto">
          Thank you, <strong>{fields.name}</strong>! This demo form has not sent
          your details automatically. Continue to WhatsApp to send your enquiry
          to Pretty Clean.
        </p>
        <p className="font-sans text-sm text-charcoal/50 mb-8">
          You selected:{" "}
          <span className="font-medium text-charcoal">
            {fields.contactMethod}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message on WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFields(initialState);
              setFiles([]);
            }}
            className="btn-secondary justify-center"
          >
            Start New Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-charcoal/8 p-6 sm:p-8 lg:p-10 space-y-6"
    >
      {/* Section: Contact Details */}
      <div>
        <h2 className="font-display font-medium text-charcoal text-xl mb-5">
          Your Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`input-field ${errors.name ? "input-error" : ""}`}
              autoComplete="name"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="label">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              placeholder="+44 7xxx xxxxxx"
              className={`input-field ${errors.phone ? "input-error" : ""}`}
              autoComplete="tel"
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`input-field ${errors.email ? "input-error" : ""}`}
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.email}
              </p>
            )}
          </div>

          {/* Contact Method */}
          <div>
            <label htmlFor="contactMethod" className="label">
              Preferred Contact Method <span className="text-red-400">*</span>
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={fields.contactMethod}
              onChange={handleChange}
              className={`input-field ${errors.contactMethod ? "input-error" : ""}`}
            >
              <option value="">Select a method</option>
              {contactMethods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            {errors.contactMethod && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.contactMethod}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal/6" />

      {/* Section: Service Details */}
      <div>
        <h2 className="font-display font-medium text-charcoal text-xl mb-5">
          Service Requirements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Service */}
          <div>
            <label htmlFor="service" className="label">
              Service Required <span className="text-red-400">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={fields.service}
              onChange={handleChange}
              className={`input-field ${errors.service ? "input-error" : ""}`}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.service}
              </p>
            )}
          </div>

          {/* Property Type */}
          <div>
            <label htmlFor="propertyType" className="label">
              Property / Job Type
            </label>
            <input
              type="text"
              id="propertyType"
              name="propertyType"
              value={fields.propertyType}
              onChange={handleChange}
              placeholder="e.g. 3-bedroom house or flat"
              className="input-field"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="label">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={fields.date}
              onChange={handleChange}
              className="input-field"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="label">
              Preferred Time
            </label>
            <select
              id="time"
              name="time"
              value={fields.time}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select a time</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          {/* Rooms */}
          <div>
            <label htmlFor="rooms" className="label">
              Number of Rooms
            </label>
            <input
              type="text"
              id="rooms"
              name="rooms"
              value={fields.rooms}
              onChange={handleChange}
              placeholder="e.g. 3 bedrooms, 1 bathroom..."
              className="input-field"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-5">
          <label htmlFor="message" className="label">
            Message / Cleaning Requirements
          </label>
          <textarea
            id="message"
            name="message"
            value={fields.message}
            onChange={handleChange}
            rows={4}
            placeholder="Please share your cleaning requirements or any questions for Pretty Clean..."
            className="input-field resize-none"
          />
        </div>
      </div>

      <div className="border-t border-charcoal/6" />

      {/* Photo Upload */}
      <div>
        <h2 className="font-display font-medium text-charcoal text-xl mb-2">
          Photos (Optional)
        </h2>
        <p className="font-sans text-sm text-charcoal/55 mb-4">
          You can select up to 5 photos here. This demo form does not send the
          files; attach them directly when you continue in WhatsApp.
        </p>

        <input
          type="file"
          ref={fileRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="sr-only"
          id="file-upload"
          aria-label="Upload photos"
        />

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2.5 px-5 py-3 border-2 border-dashed border-charcoal/20 rounded-xl text-sm font-medium text-charcoal/60 hover:border-brand-purple/50 hover:text-brand-purple hover:bg-brand-teal-light/30 transition-colors duration-150 w-full justify-center focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
        >
          <Upload size={16} />
          {files.length === 0
            ? "Upload Photos"
            : `Add More Photos (${files.length}/5)`}
        </button>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-2 bg-brand-teal-light/50 rounded-lg px-3 py-2"
              >
                <span className="text-sm text-charcoal/70 font-sans truncate">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Remove ${file.name}`}
                  className="text-charcoal/40 hover:text-charcoal transition-colors flex-shrink-0 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-charcoal/6 pt-4">
        <button
          type="submit"
          className="btn-primary w-full justify-center py-4 text-base"
        >
          Prepare Enquiry
        </button>
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-3 w-full justify-center"
        >
          <MessageCircle size={16} />
          Message us on WhatsApp
        </a>
        <p className="mt-3 text-xs text-center text-charcoal/40 font-sans">
          This demo form does not send or store your details. Continue via
          WhatsApp to send your enquiry.
        </p>
      </div>
    </form>
  );
}
