// import { motion } from 'framer-motion';
// import { aboutData } from '../data/Data';

// const About = () => {
//     // Animation variants
//     const container = {
//         hidden: { opacity: 0 },
//         show: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1,
//                 delayChildren: 0.3
//             }
//         }
//     };

//     const item = {
//         hidden: { y: 20, opacity: 0 },
//         show: { 
//             y: 0, 
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: [0.16, 1, 0.3, 1]
//             }
//         }
//     };

//     const imageAnim = {
//         hidden: { scale: 0.9, opacity: 0 },
//         show: {
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: [0.16, 1, 0.3, 1]
//             }
//         }
//     };

//     const skillAnim = (i) => ({
//         hidden: { scale: 0.8, opacity: 0 },
//         show: {
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 delay: i * 0.05,
//                 duration: 0.5,
//                 ease: [0.16, 1, 0.3, 1]
//             }
//         }
//     });

//     return (
//         <section id="about" className="py-16 bg-[#0B192C] overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header Section */}
//                 <motion.div 
//                     className="text-center mb-12"
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={container}
//                 >
//                     <motion.h2 
//                         className="text-3xl md:text-4xl font-bold text-white"
//                         variants={item}
//                     >
//                         {aboutData.title} <span className="text-[#FF6500]">Me</span>
//                     </motion.h2>
//                     <motion.div 
//                         className="w-20 h-1 bg-[#FF6500] mx-auto mt-4"
//                         variants={item}
//                     />
//                     <motion.p 
//                         className="text-gray-400 mt-4 max-w-2xl mx-auto"
//                         variants={item}
//                     >
//                         {aboutData.subtitle}
//                     </motion.p>
//                 </motion.div>

//                 {/* Main Content */}
//                 <motion.div 
//                     className="flex flex-col lg:flex-row gap-12 items-center"
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={container}
//                 >
//                     {/* Image */}
//                     <motion.div 
//                         className="lg:w-1/3"
//                         variants={imageAnim}
//                     >
//                         <motion.img 
//                             src={aboutData.image.src} 
//                             alt={aboutData.image.alt} 
//                             className="rounded-lg border-2 border-[#1E3E62] shadow-lg w-full hover:border-[#FF6500] transition-all duration-300"
//                             whileHover={{ scale: 1.02 }}
//                         />
//                     </motion.div>

//                     {/* Content */}
//                     <motion.div 
//                         className="lg:w-2/3"
//                         variants={container}
//                     >
//                         <motion.h3 
//                             className="text-2xl font-semibold text-[#FF6500] mb-4"
//                             variants={item}
//                         >
//                             {aboutData.profile.title}
//                         </motion.h3>
//                         <motion.p 
//                             className="text-gray-300 mb-6"
//                             variants={item}
//                         >
//                             {aboutData.profile.description}
//                         </motion.p>
                        
//                         {/* Info Grid */}
//                         <motion.div 
//                             className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
//                             variants={container}
//                         >
//                             {aboutData.info.map((infoItem, index) => (
//                                 <motion.div 
//                                     key={index} 
//                                     className="bg-[#1E3E62]/50 p-4 rounded-lg border border-[#1E3E62] hover:border-[#FF6500] transition-all"
//                                     variants={item}
//                                     whileHover={{ 
//                                         y: -5,
//                                         boxShadow: "0 10px 15px -3px rgba(255, 101, 0, 0.1)"
//                                     }}
//                                 >
//                                     <h4 className="text-[#FF6500] font-medium text-sm">{infoItem.title}</h4>
//                                     <p className="text-gray-300 text-sm">{infoItem.value}</p>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
                        
//                         {/* Buttons */}
//                         <motion.div 
//                             className="flex flex-wrap gap-4"
//                             variants={item}
//                         >
//                             {aboutData.buttons.map((button, index) => (
//                                 <motion.a 
//                                     key={index}
//                                     href={button.url}
//                                     download={button.type === 'download'}
//                                     className={`px-6 py-2 ${
//                                         button.type === 'download' 
//                                             ? 'bg-[#FF6500] text-white hover:bg-[#E55C00]' 
//                                             : 'border border-[#FF6500] text-[#FF6500] hover:bg-[#FF6500]/10'
//                                     } rounded-md transition-colors duration-300 flex items-center`}
//                                     whileHover={{ 
//                                         scale: 1.05,
//                                         boxShadow: button.type === 'download' 
//                                             ? "0 4px 6px -1px rgba(255, 101, 0, 0.3)" 
//                                             : "0 4px 6px -1px rgba(255, 101, 0, 0.1)"
//                                     }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     {button.icon}
//                                     {button.text}
//                                 </motion.a>
//                             ))}
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Skills Section */}
//                 <motion.div 
//                     className="mt-12"
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={container}
//                 >
//                     <motion.h3 
//                         className="text-xl font-semibold text-white mb-6"
//                         variants={item}
//                     >
//                         {aboutData.skills.title}
//                     </motion.h3>
//                     <motion.div 
//                         className="flex flex-wrap gap-3"
//                         variants={container}
//                     >
//                         {aboutData.skills.items.map((skill, index) => (
//                             <motion.span 
//                                 key={index} 
//                                 className="px-4 py-2 bg-[#1E3E62]/50 text-gray-300 text-sm rounded-full border border-[#1E3E62] hover:border-[#FF6500] transition-all"
//                                 variants={skillAnim(index)}
//                                 whileHover={{ 
//                                     scale: 1.1, 
//                                     backgroundColor: "rgba(30, 62, 98, 0.8)",
//                                     color: "#fff"
//                                 }}
//                             >
//                                 {skill}
//                             </motion.span>
//                         ))}
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default About;





import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutData } from '../data/Data';

const About = ({ theme }) => {
  const isDark = theme === 'dark';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const imageAnim = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const skillAnim = (i) => ({
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B192C]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
        >
          <motion.h2
            className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            variants={item}
          >
            {aboutData.title} <span className="text-[#FF6500]">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 mx-auto mt-4"
            style={{ backgroundColor: '#FF6500' }}
            variants={item}
          />
          <motion.p
            className={`mt-4 max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
            variants={item}
          >
            {aboutData.subtitle}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
        >
          {/* Image */}
          <motion.div className="lg:w-1/3" variants={imageAnim}>
            <motion.img
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              className={`rounded-lg border-2 shadow-lg w-full transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'border-[#1E3E62] hover:border-[#FF6500]'
                  : 'border-gray-300 hover:border-[#FF6500]'
              }`}
            />
          </motion.div>

          {/* Content */}
          <motion.div className="lg:w-2/3" variants={container}>
            <motion.h3
              className="text-2xl font-semibold mb-4 transition-colors duration-300"
              style={{ color: '#FF6500' }}
              variants={item}
            >
              {aboutData.profile.title}
            </motion.h3>
            <motion.p
              className={`mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}
              variants={item}
            >
              {aboutData.profile.description}
            </motion.p>

            {/* Info Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={container}>
              {aboutData.info.map((infoItem, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                    isDark
                      ? 'bg-[#1E3E62]/50 border-[#1E3E62] hover:border-[#FF6500]'
                      : 'bg-gray-100 border-gray-300 hover:border-[#FF6500]'
                  }`}
                  variants={item}
                >
                  <h4 className="text-[#FF6500] font-medium text-sm">{infoItem.title}</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    {infoItem.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={item}>
              {aboutData.buttons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.url}
                  download={button.type === 'download'}
                  className={`px-6 py-2 rounded-md flex items-center transition-all duration-300 ${
                    button.type === 'download'
                      ? 'text-white'
                      : isDark
                      ? 'text-[#FF6500]'
                      : 'text-[#FF6500]'
                  } ${
                    button.type === 'download'
                      ? `bg-[#FF6500] hover:bg-[#E55C00]`
                      : `border border-[#FF6500] hover:bg-[#FF6500]/10`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.icon}
                  {button.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div className="mt-12" variants={container}>
          <motion.h3
            className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            variants={item}
          >
            {aboutData.skills.title}
          </motion.h3>
          <motion.div className="flex flex-wrap gap-3" variants={container}>
            {aboutData.skills.items.map((skill, index) => (
              <motion.span
                key={index}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1E3E62]/50 border-[#1E3E62] text-gray-300 hover:border-[#FF6500] hover:bg-[#1E3E62]/80 hover:text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-800 hover:border-[#FF6500] hover:bg-gray-200'
                }`}
                variants={skillAnim(index)}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
