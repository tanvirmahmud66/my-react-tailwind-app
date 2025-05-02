import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { contactData } from '../data/Data';

const iconComponents = {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter
};

const Contact = () => {
  const Icon = ({ name }) => {
    const IconComponent = iconComponents[name];
    return <IconComponent className="w-5 h-5 text-white" />;
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0B192C] border-t border-[#1E3E62] overflow-hidden">
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
              className="p-8 md:p-12 space-y-6 bg-[#0B192C]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactData.formFields.slice(0, 2).map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-gray-300 text-sm mb-2">
                      {field.label}
                    </label>
                    <input 
                      id={field.id}
                      type={field.type} 
                      className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>
              
              {contactData.formFields.slice(2, -1).map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-300 text-sm mb-2">
                    {field.label}
                  </label>
                  <input 
                    id={field.id}
                    type={field.type} 
                    className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}
              
              {contactData.formFields.slice(-1).map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-300 text-sm mb-2">
                    {field.label}
                  </label>
                  <textarea 
                    id={field.id}
                    rows={field.rows} 
                    className="w-full px-4 py-3 bg-[#1E3E62]/50 border border-[#1E3E62] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6500] transition-colors"
                    placeholder={field.placeholder}
                    required={field.required}
                  ></textarea>
                </div>
              ))}
              
              <motion.button
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#FF6500] to-[#E55C00] text-white rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;