
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { FiCheckCircle, FiClock } from "react-icons/fi";
// import { productsData } from "../data/Data";

// const Products = ({ theme }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const isDark = theme === "dark";

//   // Colors
//   const bgColor = isDark ? "#0B192C" : "#ffffff";
//   const cardBg = isDark ? "rgba(30, 62, 98, 0.2)" : "rgba(243, 244, 246, 0.2)";
//   const borderColor = isDark ? "#1E3E62" : "#D1D5DB";
//   const textColor = isDark ? "#ffffff" : "#111827";
//   const subTextColor = isDark ? "#D1D5DB" : "#6B7280";
//   const accentColor = "#FF6500";

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
//   };

//   const item = {
//     hidden: { y: 30, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
//   };

//   const cardHover = {
//     y: -5,
//     boxShadow: `0 10px 25px -5px ${accentColor}33`,
//   };

//   const plannedCardHover = {
//     y: -5,
//     boxShadow: `0 10px 25px -5px ${accentColor}22`,
//   };

//   return (
//     <section id="products" className="py-16 transition-colors duration-300" ref={ref} style={{ backgroundColor: bgColor }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
//           <motion.h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor }} variants={item}>
//             {productsData.title} <span style={{ color: accentColor }}>Products</span>
//           </motion.h2>
//           <motion.div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: accentColor }} variants={item} />
//           <motion.p className="mt-4 max-w-2xl mx-auto" style={{ color: subTextColor }} variants={item}>
//             {productsData.subtitle}
//           </motion.p>
//         </motion.div>

//         {/* Completed Products */}
//         <motion.div className="mb-16" initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
//           <motion.h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: textColor }} variants={item}>
//             <motion.span className="mr-3" style={{ color: accentColor }} whileHover={{ rotate: 15 }}>
//               <FiCheckCircle />
//             </motion.span>
//             {productsData.completed.title}
//           </motion.h3>

//           <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container}>
//             {productsData.completed.items.map((product, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="p-6 rounded-lg border relative transition-all duration-300"
//                 style={{ backgroundColor: cardBg, borderColor: borderColor }}
//                 whileHover={cardHover}
//               >
//                 <h4 className="text-xl font-bold mb-2" style={{ color: textColor }}>{product.title}</h4>
//                 <p style={{ color: subTextColor }} className="mb-4">{product.description}</p>

//                 {/* Features */}
//                 <div className="mb-4">
//                   <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Key Features:</h5>
//                   <ul className="space-y-1">
//                     {product.features.map((feature, i) => (
//                       <motion.li key={i} className="flex items-start text-sm" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
//                         <span style={{ color: accentColor }} className="mr-2">▹</span>
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Technologies:</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {product.technologies.map((tech, i) => (
//                       <motion.span
//                         key={i}
//                         className="px-3 py-1 text-xs rounded-full border"
//                         style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
//                         whileHover={{ scale: 1.1, backgroundColor: "rgba(30,62,98,0.5)" }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Planned Products */}
//         <motion.div initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
//           <motion.h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: textColor }} variants={item}>
//             <motion.span
//               className="mr-3"
//               style={{ color: accentColor }}
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
//             >
//               <FiClock />
//             </motion.span>
//             {productsData.planned.title}
//           </motion.h3>

//           <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container}>
//             {productsData.planned.items.map((product, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="p-6 rounded-lg border border-dashed relative transition-all duration-300"
//                 style={{ backgroundColor: cardBg, borderColor: borderColor }}
//                 whileHover={plannedCardHover}
//               >
//                 <div className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full text-white`} style={{ backgroundColor: accentColor }}>
//                   {product.status}
//                 </div>

//                 <h4 className="text-xl font-bold mb-2" style={{ color: textColor }}>{product.title}</h4>
//                 <p style={{ color: subTextColor }} className="mb-4">{product.description}</p>

//                 <div className="mb-4">
//                   <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Planned Features:</h5>
//                   <ul className="space-y-1">
//                     {product.features.map((feature, i) => (
//                       <motion.li key={i} className="flex items-start text-sm" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
//                         <span style={{ color: accentColor }} className="mr-2">▸</span>
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Tech Stack:</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {product.technologies.map((tech, i) => (
//                       <motion.span
//                         key={i}
//                         className="px-3 py-1 text-xs rounded-full border"
//                         style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
//                         whileHover={{ scale: 1.1, backgroundColor: "rgba(30,62,98,0.3)" }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Products;






import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { productsData } from "../data/Data";

const Products = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 }); // Reduced threshold for mobile
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
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const cardHover = {
    y: -5,
    boxShadow: `0 10px 25px -5px ${accentColor}33`,
  };

  const plannedCardHover = {
    y: -5,
    boxShadow: `0 10px 25px -5px ${accentColor}22`,
  };

  return (
    <section id="products" className="py-16 transition-colors duration-300" ref={ref} style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
          <motion.h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor }} variants={item}>
            {productsData.title} <span style={{ color: accentColor }}>Products</span>
          </motion.h2>
          <motion.div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: accentColor }} variants={item} />
          <motion.p className="mt-4 max-w-2xl mx-auto text-sm md:text-base" style={{ color: subTextColor }} variants={item}>
            {productsData.subtitle}
          </motion.p>
        </motion.div>

        {/* Completed Products */}
        <motion.div className="mb-16" initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
          <motion.h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: textColor }} variants={item}>
            <motion.span className="mr-3" style={{ color: accentColor }} whileHover={{ rotate: 15 }}>
              <FiCheckCircle />
            </motion.span>
            {productsData.completed.title}
          </motion.h3>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container}>
            {productsData.completed.items.map((product, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-lg border relative transition-all duration-300"
                style={{ backgroundColor: cardBg, borderColor: borderColor }}
                whileHover={cardHover}
              >
                <h4 className="text-xl font-bold mb-2" style={{ color: textColor }}>{product.title}</h4>
                <p style={{ color: subTextColor }} className="mb-4 text-sm md:text-base">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <motion.li key={i} className="flex items-start text-sm" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
                        <span style={{ color: accentColor }} className="mr-2">▹</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
                        whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(30,62,98,0.5)" : "rgba(243,244,246,0.5)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Planned Products */}
        <motion.div initial="hidden" animate={isInView ? "show" : "hidden"} variants={container}>
          <motion.h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: textColor }} variants={item}>
            <motion.span
              className="mr-3"
              style={{ color: accentColor }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            >
              <FiClock />
            </motion.span>
            {productsData.planned.title}
          </motion.h3>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container}>
            {productsData.planned.items.map((product, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-lg border border-dashed relative transition-all duration-300"
                style={{ backgroundColor: cardBg, borderColor: borderColor }}
                whileHover={plannedCardHover}
              >
                <div className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full text-white`} style={{ backgroundColor: accentColor }}>
                  {product.status}
                </div>

                <h4 className="text-xl font-bold mb-2" style={{ color: textColor }}>{product.title}</h4>
                <p style={{ color: subTextColor }} className="mb-4 text-sm md:text-base">{product.description}</p>

                <div className="mb-4">
                  <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Planned Features:</h5>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <motion.li key={i} className="flex items-start text-sm" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
                        <span style={{ color: accentColor }} className="mr-2">▸</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 style={{ color: accentColor }} className="text-sm font-medium mb-2">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{ backgroundColor: bgColor, borderColor: borderColor, color: accentColor }}
                        whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(30,62,98,0.3)" : "rgba(243,244,246,0.3)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;