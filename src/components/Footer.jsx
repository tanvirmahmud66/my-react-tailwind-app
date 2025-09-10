

import { motion } from "framer-motion";
import footerData from "../data/Data.jsx";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
  address: FiMapPin,
};

const Footer = ({ theme }) => {
  const { personalInfo, socialLinks, quickLinks, legalLinks } = footerData;
  const isDark = theme === "dark";

  const accentColor = "#FF6500";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-[#0B192C] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div className="lg:col-span-2" custom={0} variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-4">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-[#FF6500]">{personalInfo.highlightName}</span>
            </h3>
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
              {personalInfo.role}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDark ? "text-gray-300" : "text-gray-500"}`}
                    whileHover={{ scale: 1.1, color: accentColor }}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div custom={1} variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  whileHover={{ x: 4, color: accentColor }}
                  className={isDark ? "text-gray-300" : "text-gray-500"}
                >
                  <a href={link.url} className="transition-colors">{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div custom={2} variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className={`flex items-start ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                <FiPhone className="w-5 h-5 mr-2 mt-0.5 text-[#FF6500]" />
                {personalInfo.phone}
              </li>
              <li className={`flex items-start ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                <FiMail className="w-5 h-5 mr-2 mt-0.5 text-[#FF6500]" />
                {personalInfo.email}
              </li>
              <li className={`flex items-start ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                <FiMapPin className="w-5 h-5 mr-2 mt-0.5 text-[#FF6500]" />
                {personalInfo.address}
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div
          className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
            isDark ? "border-[#1E3E62]" : "border-gray-200"
          }`}
        >
          <p className={isDark ? "text-gray-400 text-sm mb-4 md:mb-0" : "text-gray-500 text-sm mb-4 md:mb-0"}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-sm transition-colors ${isDark ? "text-gray-400 hover:text-[#FF6500]" : "text-gray-500 hover:text-[#FF6500]"}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
