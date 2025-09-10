

import { motion } from "framer-motion";
import { 
  FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter,
  FiCheckCircle, FiAlertCircle, FiX
} from "react-icons/fi";
import { contactData } from "../data/Data";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize EmailJS
emailjs.init("R4UoeY_S5OIpxepwU");

const iconComponents = { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter };

const CustomToast = ({ type, message, closeToast }) => {
  const bgColor = type === "success" ? "from-green-500/10 to-green-800/20" : "from-red-500/10 to-red-800/20";
  const borderColor = type === "success" ? "border-l-green-400" : "border-l-red-400";
  const Icon = type === "success" ? FiCheckCircle : FiAlertCircle;
  const iconColor = type === "success" ? "text-green-400" : "text-red-400";

  return (
    <div className={`w-full max-w-md bg-gradient-to-r ${bgColor} ${borderColor} border-l-4 rounded-lg shadow-lg`}>
      <div className="flex items-start p-4">
        <div className={`flex-shrink-0 pt-0.5 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-white">{type === "success" ? "Success!" : "Error!"}</p>
            <button onClick={closeToast} className="text-gray-400 hover:text-white focus:outline-none">
              <FiX className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-300">{message}</p>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ theme }) => {
  const ref = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDark = theme === "dark";

  // Colors
  const bgColor = isDark ? "#0B192C" : "#ffffff";
  const cardBg = isDark ? "rgba(30,62,98,0.2)" : "rgba(243,244,246,0.2)";
  const borderColor = isDark ? "#1E3E62" : "#D1D5DB";
  const textColor = isDark ? "#ffffff" : "#111827";
  const subTextColor = isDark ? "#D1D5DB" : "#6B7280";
  const accentColor = "#FF6500";

  const Icon = ({ name }) => {
    const IconComponent = iconComponents[name];
    return <IconComponent className="w-5 h-5 text-white" />;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_16nmfoe",
      "template_g9eakir",
      ref.current,
      "R4UoeY_S5OIpxepwU"
    )
    .then(() => {
      toast(
        ({ closeToast }) => <CustomToast type="success" message="Your message has been sent successfully!" closeToast={closeToast} />,
        { position: "top-right", autoClose: 5000, hideProgressBar: true, closeButton: false, pauseOnHover: true, draggable: true }
      );
      ref.current.reset();
    })
    .catch(() => {
      toast(
        ({ closeToast }) => <CustomToast type="error" message="Failed to send message. Please try again later." closeToast={closeToast} />,
        { position: "top-right", autoClose: 5000, hideProgressBar: true, closeButton: false, pauseOnHover: true, draggable: true }
      );
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden transition-colors duration-300" style={{ backgroundColor: bgColor }} ref={ref}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="!bg-transparent !p-0 !m-0 !mb-3 !shadow-none !overflow-visible"
        bodyClassName="!p-0 !m-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold" style={{ color: textColor }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {contactData.title} <span style={{ color: accentColor }}>Connect</span>
          </motion.h2>
          <motion.div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: accentColor }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
          <motion.p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: subTextColor }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            {contactData.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col xl:flex-row gap-0 rounded-xl overflow-hidden shadow-2xl">
          {/* Left - Contact Info */}
          <div className="w-full xl:w-2/5 p-8 md:p-12" style={{ backgroundColor: cardBg }}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: textColor }}>{contactData.contactInfo.title}</h3>
              
              {contactData.contactInfo.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg flex-shrink-0`} style={{ background: `linear-gradient(135deg, ${accentColor}55, ${accentColor}aa)` }}>
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: textColor }}>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: subTextColor }} className="hover:text-[#FF6500] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: subTextColor }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4" style={{ color: textColor }}>Follow Me</h4>
                <div className="flex space-x-4">
                  {contactData.socialLinks.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg transition-colors" style={{ backgroundColor: cardBg, color: subTextColor }} aria-label={social.name}>
                      <Icon name={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map & Form */}
          <div className="w-full xl:w-3/5 flex flex-col">
            <div className="h-64 md:h-80 w-full" style={{ backgroundColor: cardBg }}>
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>

            <motion.form
              ref={ref}
              onSubmit={sendEmail}
              className="p-8 md:p-12 space-y-6"
              style={{ backgroundColor: bgColor }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["from_name","from_email","subject"].map((field, i) => (
                <div key={i}>
                  <label htmlFor={field} className="block text-sm mb-2" style={{ color: subTextColor }}>
                    {field === "from_name" ? "Name" : field === "from_email" ? "Email" : "Subject"}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "from_email" ? "email" : "text"}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors"
                    placeholder={field === "from_name" ? "Your name" : field === "from_email" ? "Your email" : "Message subject"}
                    required
                    style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: textColor }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: subTextColor }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors"
                  style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: textColor }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-lg flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                style={{ background: `linear-gradient(135deg, ${accentColor}, #E55C00)`, color: "#fff" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
