
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { heroData } from "../data/Data";
import { NewtonsCradle } from "ldrs/react";
import "ldrs/react/NewtonsCradle.css";

const Hero = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isDark = theme === "dark";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "backOut" } },
  };

  // Colors
  const accentColor = heroData.highlightColor;
  const secondaryColor = heroData.secondaryColor;
  const textColor = isDark ? "white" : "black";
  const subTextColor = isDark ? "gray-300" : "gray-800";
  const bgColor = isDark ? "#0B192C" : "#ffffff";

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-24 transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        backgroundImage: isDark ? heroData.backgroundImage : "none",
        backgroundSize: isDark ? "cover" : "unset",
        backgroundRepeat: isDark ? "no-repeat" : "unset",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div className="w-full lg:w-1/2 space-y-5" variants={containerVariants}>
            <motion.h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300`}
              style={{ color: textColor }}
              variants={itemVariants}
            >
              Hi, I'm <span style={{ color: accentColor }}>{heroData.name}</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-semibold transition-colors duration-300"
              style={{ color: isDark ? "#D1D5DB" : "#374151" }}
              variants={itemVariants}
            >
              <span style={{ borderBottom: `2px solid ${accentColor}` }}>
                {heroData.title}
              </span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg transition-colors duration-300"
              style={{ color: isDark ? "#D1D5DB" : "#374151" }}
              variants={itemVariants}
            >
              {heroData.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-3 pt-2" variants={itemVariants}>
              <a
                href={heroData.links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md text-sm md:text-base font-medium flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: accentColor,
                  color: isDark ? "white" : "black",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? "black" : "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "white" : "black")}
              >
                {heroData.links.linkedin.icon}
                {heroData.links.linkedin.text}
              </a>

              <a
                href={heroData.links.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-md text-sm font-medium flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: accentColor,
                  color: isDark ? "white" : accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isDark ? "black" : "white";
                  e.currentTarget.style.backgroundColor = accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark ? "white" : accentColor;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {heroData.links.resume.icon}
                {heroData.links.resume.text}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end" variants={imageVariants}>
            <div className="relative group w-full max-w-md flex items-center justify-center">
              {!isImageLoaded && (
                <div className="flex justify-center items-center w-full h-80">
                  <NewtonsCradle size="78" speed="1.4" color={isDark ? "white" : "black"} />
                </div>
              )}

              <motion.div
                className={`absolute -inset-1 rounded-md lg:rounded-full blur opacity-75 group-hover:opacity-100 ${
                  !isImageLoaded ? "hidden" : ""
                }`}
                style={{ backgroundColor: secondaryColor }}
                whileHover={{ scale: 1.02 }}
              />

              <motion.img
                src={heroData.image.src}
                alt={heroData.image.alt}
                onLoad={() => setIsImageLoaded(true)}
                className={`relative w-full h-auto rounded-md lg:rounded-full border-2 object-cover shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02] ${
                  !isImageLoaded ? "hidden" : "block"
                }`}
                style={{ borderColor: secondaryColor }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
