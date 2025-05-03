import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiLinkedin, 
  FiGithub, 
  FiTwitter,
  FiCheckCircle,
  FiAlertCircle,
  FiX
} from 'react-icons/fi';
import { contactData } from '../data/Data';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize EmailJS
emailjs.init("R4UoeY_S5OIpxepwU");

const iconComponents = {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter
};

// Custom Toast Component
const CustomToast = ({ type, message, closeToast }) => {
  const bgColor = type === 'success' ? 'from-green-500/10 to-green-800/20' : 'from-red-500/10 to-red-800/20';
  const borderColor = type === 'success' ? 'border-l-green-400' : 'border-l-red-400';
  const Icon = type === 'success' ? FiCheckCircle : FiAlertCircle;
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className={`w-full max-w-md bg-gradient-to-r ${bgColor} ${borderColor} border-l-4 rounded-lg shadow-lg`}>
      <div className="flex items-start p-4">
        <div className={`flex-shrink-0 pt-0.5 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-white">
              {type === 'success' ? 'Success!' : 'Error!'}
            </p>
            <button 
              onClick={closeToast}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-300">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Icon = ({ name }) => {
    const IconComponent = iconComponents[name];
    return <IconComponent className="w-5 h-5 text-white" />;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_16nmfoe',
      'template_g9eakir',
      form.current,
      'R4UoeY_S5OIpxepwU'
    )
    .then((result) => {
      toast(
        ({ closeToast }) => (
          <CustomToast 
            type="success" 
            message="Your message has been sent successfully!" 
            closeToast={closeToast} 
          />
        ),
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          className: 'toast-message'
        }
      );
      form.current.reset();
    }, (error) => {
      toast(
        ({ closeToast }) => (
          <CustomToast 
            type="error" 
            message="Failed to send message. Please try again later." 
            closeToast={closeToast} 
          />
        ),
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          className: 'toast-message'
        }
      );
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0B192C] border-t border-[#1E3E62] overflow-hidden">
      {/* Custom Toast Container */}
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
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjY1MDAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwaDQwdDQwdjQwSDB6Ii8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {contactData.title} <span className="text-[#FF6500]">Connect</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#FF6500] to-transparent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {contactData.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col xl:flex-row gap-0 bg-[#0B192C] rounded-xl overflow-hidden shadow-2xl">
          {/* Left Side - Contact Info */}
          <div className="w-full xl:w-2/5 bg-[#1E3E62]/20 p-8 md:p-12 backdrop-blur-sm">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{contactData.contactInfo.title}</h3>
              
              {contactData.contactInfo.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#FF6500] to-[#E55C00] rounded-lg flex-shrink-0 shadow-md">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-300 hover:text-[#FF6500] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {contactData.socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1E3E62]/50 rounded-lg text-gray-300 hover:text-[#FF6500] hover:bg-[#1E3E62]/80 transition-colors shadow-md"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Map and Form */}
          <div className="w-full xl:w-3/5 flex flex-col">
            {/* Map Section */}
            <div className="h-64 md:h-80 w-full bg-[#1E3E62]/30">
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>

            {/* Form Section */}
            <motion.form 
              ref={form}
              onSubmit={sendEmail}
              className="p-8 md:p-12 space-y-6 bg-[#0B192C]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Name Field */}
              <div>
                <label htmlFor="from_name" className="block text-gray-300 text-sm mb-2">
                  Name
                </label>
                <input 
                  id="from_name"
                  name="from_name"
                  type="text" 
                  className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="from_email" className="block text-gray-300 text-sm mb-2">
                  Email
                </label>
                <input 
                  id="from_email"
                  name="from_email"
                  type="email" 
                  className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm mb-2">
                  Subject
                </label>
                <input 
                  id="subject"
                  name="subject"
                  type="text" 
                  className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                  placeholder="Message subject"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5} 
                  className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#FF6500] to-[#E55C00] text-white rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
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