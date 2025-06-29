import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className=" py-16 rounded-xl shadow max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">📞 Contact Information</h2>

      <div className="space-y-4 text-base-content">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-primary" />
          <span>Email: <a href="mailto:info@diversedish.com" className="link">info@diversedish.com</a></span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-primary" />
          <span>Phone: <a href="tel:+8801234567890" className="link">+880 123 456 7890</a></span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-primary" />
          <span>Location: Dhaka, Bangladesh</span>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
