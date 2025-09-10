
import { motion } from "framer-motion";
import { experienceData } from "../data/Data";

const Experience = ({ theme }) => {
  const isDark = theme === "dark";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(255, 101, 0, 0.1)",
  };

  const projectCardHover = {
    y: -5,
    boxShadow: "0 8px 20px -5px rgba(255, 101, 0, 0.1)",
  };

  const bgColor = isDark ? "bg-[#0B192C]" : "bg-white";
  const cardBg = isDark ? "bg-[#1E3E62]/30" : "bg-gray-100/50";
  const cardBorder = isDark ? "border-[#1E3E62]" : "border-gray-300";
  const textColor = isDark ? "text-white" : "text-black";
  const subtitleColor = isDark ? "text-gray-400" : "text-gray-800";
  const accentColor = "#FF6500";

  return (
    <section id="experience" className={`py-16 overflow-hidden transition-colors duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${textColor}`} variants={item}>
            {experienceData.title} <span className="text-[#FF6500]">Experience</span>
          </motion.h2>
          <motion.div className={`w-20 h-1 mx-auto mt-4`} style={{ backgroundColor: accentColor }} variants={item} />
          <motion.p className={`mt-4 max-w-2xl mx-auto transition-colors duration-300 ${subtitleColor}`} variants={item}>
            {experienceData.subtitle}
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container}>
          {experienceData.experiences?.map((exp, index) => (
            <motion.div
              key={index}
              className={`p-6 md:p-8 rounded-lg border transition-all duration-300 ${cardBg} ${cardBorder} hover:border-[#FF6500]`}
              variants={item}
              whileHover={cardHover}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${textColor}`}>{exp.role}</h3>
                    <div className="px-2 py-1 text-xs rounded-full bg-green-500 text-white">{exp.type}</div>
                  </div>
                  <p className="text-[#FF6500]">{exp.company}</p>
                </div>
                <motion.span
                  className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 ${cardBorder} ${textColor}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.duration}
                </motion.span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description?.map((item, i) => (
                  <motion.li key={i} className={`flex items-start transition-colors duration-300 ${subtitleColor}`} variants={item}>
                    <span className={`mr-2`} style={{ color: accentColor }}>▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {exp.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${cardBorder} ${textColor}`}
                      variants={item}
                      whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(30,62,98,0.8)" : "rgba(255,165,0,0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          {/* Projects Section */}
          {experienceData.projects?.items?.length > 0 && (
            <motion.div className="mt-12" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={container}>
              <motion.h3 className={`text-xl font-semibold mb-6 text-center transition-colors duration-300 ${textColor}`} variants={item}>
                {experienceData.projects.title} <span className="text-[#FF6500]">Projects</span>
              </motion.h3>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container}>
                {experienceData.projects.items.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`p-5 rounded-lg border transition-all duration-300 ${cardBg} ${cardBorder} hover:border-[#FF6500]`}
                    variants={item}
                    whileHover={projectCardHover}
                  >
                    <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${textColor}`}>{project.name}</h4>
                    <p className={`text-sm mb-3 transition-colors duration-300 ${subtitleColor}`}>{project.description}</p>
                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className={`px-2 py-1 text-xs rounded-full border transition-all duration-300 ${cardBorder} ${textColor}`}
                            whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(30,62,98,0.8)" : "rgba(255,165,0,0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
