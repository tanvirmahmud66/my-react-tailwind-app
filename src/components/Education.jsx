

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educationData } from "../data/Data";

const Education = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  // Colors
  const bgColor = isDark ? "#0B192C" : "#ffffff";
  const cardBg = isDark ? "rgba(30, 62, 98, 0.2)" : "rgba(243, 244, 246, 0.2)";
  const borderColor = isDark ? "#1E3E62" : "#D1D5DB";
  const textColor = isDark ? "#ffffff" : "#111827";
  const subTextColor = isDark ? "#D1D5DB" : "#6B7280";
  const accentColor = "#FF6500";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const lineAnim = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  const dotAnim = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
  };

  const iconAnim = {
    hidden: { rotate: -90, opacity: 0 },
    show: { rotate: 0, opacity: 1, transition: { duration: 0.6, ease: "backOut" } },
  };

  return (
    <section id="education" className="py-16 transition-colors duration-300" ref={ref} style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
          <motion.h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor }} variants={item}>
            {educationData.title} <span style={{ color: accentColor }}>Journey</span>
          </motion.h2>
          <motion.div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: accentColor }} variants={item} />
          <motion.p className="mt-4 max-w-2xl mx-auto" style={{ color: subTextColor }} variants={item}>
            {educationData.subtitle}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <motion.div
            className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF6500] to-[#1E3E62] transform -translate-x-1/2 origin-top"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={lineAnim}
          />

          <motion.div initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
            {educationData.educations.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`mb-8 w-full flex flex-col md:flex-row ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="w-full md:w-1/2 p-2">
                  <motion.div
                    className="p-6 rounded-lg border transition-all duration-300 relative"
                    style={{ backgroundColor: cardBg, borderColor: borderColor }}
                    whileHover={{ y: -5, boxShadow: `0 10px 20px -5px ${accentColor}33` }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`hidden md:block absolute top-6 w-4 h-4 rounded-full ${accentColor} ${index % 2 === 0 ? "-right-2" : "-left-2"}`}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      variants={dotAnim}
                      style={{ backgroundColor: accentColor }}
                    />

                    <div className="flex items-start gap-3 mb-3">
                      <motion.span className="text-2xl" variants={iconAnim}>
                        {edu.icon}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div className="mb-2 md:mb-0">
                            <h3 className="text-xl font-bold" style={{ color: textColor }}>
                              {edu.degree}
                            </h3>
                            <p className="text-sm" style={{ color: accentColor }}>
                              {edu.institution}
                            </p>
                          </div>
                          <motion.span
                            className="px-3 py-1 text-xs rounded-full border w-fit"
                            style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.duration}
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4 pl-6">
                      {edu.highlights.map((item, i) => (
                        <motion.li key={i} className="flex items-start text-sm" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
                          <span style={{ color: accentColor }} className="mr-2">▸</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full border"
                          style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(30,62,98,0.5)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
