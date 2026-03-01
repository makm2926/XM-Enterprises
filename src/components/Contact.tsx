import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("?product=")) {
        const product = hash.split("?product=")[1];
        if (product) {
          setSelectedProduct(product);
          setTimeout(() => {
            const contactElement = document.getElementById("contact");
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validation
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.get("name")) newErrors.name = "Please enter your full name.";
    if (!formData.get("company")) newErrors.company = "Please enter your company name.";
    
    const email = formData.get("email") as string;
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.get("country")) newErrors.country = "Please enter your country.";
    if (!formData.get("product")) newErrors.product = "Please select a product of interest.";
    if (!formData.get("message")) newErrors.message = "Please provide details about your inquiry.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          country: formData.get("country"),
          product: formData.get("product"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      form.reset();
      setSelectedProduct("");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Ready to import premium products from Pakistan? Contact our team
              for inquiries, quotes, and partnership opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Phone / WhatsApp
                  </h3>
                  <p className="mt-1 text-slate-600">+92 311 2222796</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  <Mail className="h-5 w-5 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="mt-1 text-slate-600">info@xm.com.pk</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  <MapPin className="h-5 w-5 text-brand-green" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Headquarters
                  </h3>
                  <p className="mt-1 text-slate-600">Multan, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600">
                  Thank you for contacting XM Enterprises. Our team will respond
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="John Doe"
                      onChange={() => setErrors({ ...errors, name: "" })}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="Global Imports LLC"
                      onChange={() => setErrors({ ...errors, company: "" })}
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="john@example.com"
                      onChange={() => setErrors({ ...errors, email: "" })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.country ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="United States"
                      onChange={() => setErrors({ ...errors, country: "" })}
                    />
                    {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={selectedProduct}
                    onChange={(e) => {
                      setSelectedProduct(e.target.value);
                      setErrors({ ...errors, product: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.product ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all bg-white`}
                  >
                    <option value="">Select a product...</option>
                    <option value="textiles">Textiles & Garments</option>
                    <option value="rice">Rice (Basmati & Non-Basmati)</option>
                    <option value="sports">Sports Goods</option>
                    <option value="leather">Leather Products</option>
                    <option value="machinery">
                      Machinery & Industrial Equipment
                    </option>
                    <option value="salt">Pink Himalayan Rock Salt</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.product && <p className="mt-1 text-sm text-red-500">{errors.product}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-brand-blue'} focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                    placeholder="Please provide details about your inquiry, required quantities, etc."
                    onChange={() => setErrors({ ...errors, message: "" })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
