import { motion } from 'framer-motion';
import { skillsData } from '../data/Data';

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      y: 20,
      opacity: 0,
      scale: 0.8
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillHover = {
    y: -5,
    scale: 1.05,
    boxShadow: "0 8px 20px -5px rgba(255, 101, 0, 0.1)",
    backgroundColor: "rgba(30, 62, 98, 0.5)"
  };

  // Proficiency level colors
  const proficiencyColors = {
    Expert: "bg-green-500",
    Advanced: "bg-blue-500",
    Intermediate: "bg-yellow-500",
    Beginner: "bg-purple-500"
  };

  return (
    <section id="skills" className="py-16 bg-[#0B192C] overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold text-white"
            variants={item}
          >
            {skillsData.title} <span className="text-[#FF6500]">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#FF6500] mx-auto mt-4"
            variants={item}
          />
          <motion.p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={item}
          >
            {skillsData.subtitle}
          </motion.p>
        </motion.div>

        {/* Category Filters (optional) */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8">
          <motion.button
            className="px-3 py-1 text-xs rounded-full bg-[#1E3E62] text-white"
            whileHover={{ scale: 1.05 }}
          >
            All
          </motion.button>
          {skillsData.categories.map((category, index) => (
            <motion.button
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-[#1E3E62] text-white"
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
              className="bg-[#1E3E62]/30 p-4 rounded-lg border border-[#1E3E62] hover:border-[#FF6500] transition-all duration-300 flex flex-col items-center relative"
              variants={item}
              custom={index}
              whileHover={skillHover}
            >
              {/* Proficiency indicator */}
              <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${proficiencyColors[skill.proficiency]}`} 
                   title={skill.proficiency} />
              
              <motion.span 
                className="text-3xl mb-2"
                whileHover={{ scale: 1.2 }}
              >
                {skill.icon}
              </motion.span>
              <span className="text-white font-medium text-center">{skill.name}</span>
              <span className="text-gray-400 text-xs mt-1">{skill.category}</span>
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
              <span className="text-gray-300 text-sm">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;