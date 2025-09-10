
import { motion } from "framer-motion";
import { skillsData } from "../data/Data";

const Skills = ({ theme }) => {
  const isDark = theme === "dark";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const skillHover = {
    y: -5,
    scale: 1.05,
    boxShadow: "0 8px 20px -5px rgba(255, 101, 0, 0.1)",
    backgroundColor: isDark ? "rgba(30, 62, 98, 0.5)" : "rgba(255, 255, 255, 0.1)",
  };

  const proficiencyColors = {
    Expert: isDark ? "bg-green-500" : "bg-green-600",
    Advanced: isDark ? "bg-blue-500" : "bg-blue-600",
    Intermediate: isDark ? "bg-yellow-500" : "bg-yellow-600",
    Beginner: isDark ? "bg-purple-500" : "bg-purple-600",
  };

  const bgColor = isDark ? "#0B192C" : "#ffffff";
  const cardBg = isDark ? "rgba(30, 62, 98, 0.2)" : "rgba(0, 0, 0, 0.05)";
  const textColor = isDark ? "white" : "black";
  const subTextColor = isDark ? "#D1D5DB" : "#6B7280";

  return (
    <section
      id="skills"
      className="py-16 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: textColor }}
            variants={item}
          >
            {skillsData.title}{" "}
            <span style={{ color: "#FF6500" }}>Skills</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 mx-auto mt-4"
            style={{ backgroundColor: "#FF6500" }}
            variants={item}
          />
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-center"
            style={{ color: subTextColor }}
            variants={item}
          >
            {skillsData.subtitle}
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8">
          <motion.button
            className="px-3 py-1 text-xs rounded-full transition-all duration-300"
            style={{
              backgroundColor: isDark ? "#1E3E62" : "#E5E7EB",
              color: isDark ? "white" : "black",
            }}
            whileHover={{ scale: 1.05 }}
          >
            All
          </motion.button>
          {skillsData.categories.map((category, index) => (
            <motion.button
              key={index}
              className="px-3 py-1 text-xs rounded-full transition-all duration-300"
              style={{
                backgroundColor: isDark ? "#1E3E62" : "#E5E7EB",
                color: isDark ? "white" : "black",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg border flex flex-col items-center relative transition-all duration-300"
              style={{
                backgroundColor: cardBg,
                borderColor: isDark ? "#1E3E62" : "#D1D5DB",
              }}
              variants={item}
              custom={index}
              whileHover={skillHover}
            >
              {/* Proficiency indicator */}
              <div
                className={`absolute top-2 right-2 w-2 h-2 rounded-full ${proficiencyColors[skill.proficiency]}`}
                title={skill.proficiency}
              />

              <motion.span className="text-3xl mb-2" whileHover={{ scale: 1.2 }}>
                {skill.icon}
              </motion.span>
              <span style={{ color: textColor }} className="font-medium text-center">
                {skill.name}
              </span>
              <span style={{ color: subTextColor }} className="text-xs mt-1">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {Object.entries(proficiencyColors).map(([level, color]) => (
            <div key={level} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${color} mr-2`} />
              <span style={{ color: subTextColor }} className="text-sm">
                {level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
