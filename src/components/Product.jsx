import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheckCircle, FiClock } from 'react-icons/fi';
import { productsData } from '../data/Data';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(255, 101, 0, 0.1)"
  };

  const plannedCardHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(255, 101, 0, 0.05)"
  };

  const statusColors = {
    Live: "bg-green-500",
    Planning: "bg-yellow-500",
    Prototype: "bg-blue-500"
  };

  return (
    <section id="products" className="py-16 bg-[#0B192C]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white"
            variants={item}
          >
            {productsData.title} <span className="text-[#FF6500]">Products</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#FF6500] mx-auto mt-4"
            variants={item}
          />
          <motion.p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={item}
          >
            {productsData.subtitle}
          </motion.p>
        </motion.div>

        {/* Completed Products */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 flex items-center"
            variants={item}
          >
            <motion.span 
              className="text-[#FF6500] mr-3"
              whileHover={{ rotate: 15 }}
            >
              <FiCheckCircle />
            </motion.span>
            {productsData.completed.title}
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
          >
            {productsData.completed.items.map((product, index) => (
              <motion.div
                key={`completed-${index}`}
                variants={item}
                className="bg-[#1E3E62]/30 rounded-lg border border-[#1E3E62] hover:border-[#FF6500] transition-all duration-300 p-6 relative"
                whileHover={cardHover}
              >
                {/* Status indicator */}
                <div className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full ${statusColors[product.status]} text-white`}>
                  {product.status}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 pr-8">{product.title}</h4>
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-[#FF6500] text-sm font-medium mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start text-gray-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#FF6500] mr-2">▹</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-[#FF6500] text-sm font-medium mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-[#0B192C] text-[#FF6500] text-xs rounded-full border border-[#1E3E62]"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(30, 62, 98, 0.5)"
                        }}
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
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6 flex items-center"
            variants={item}
          >
            <motion.span 
              className="text-[#FF6500] mr-3"
              animate={{ 
                rotate: [0, 10, -10, 0],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2 
                } 
              }}
            >
              <FiClock />
            </motion.span>
            {productsData.planned.title}
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
          >
            {productsData.planned.items.map((product, index) => (
              <motion.div
                key={`planned-${index}`}
                variants={item}
                className="bg-[#1E3E62]/10 rounded-lg border border-dashed border-[#1E3E62] hover:border-[#FF6500] transition-all duration-300 p-6 relative"
                whileHover={plannedCardHover}
              >
                {/* Status indicator */}
                <div className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full ${statusColors[product.status]} text-white`}>
                  {product.status}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 pr-8">{product.title}</h4>
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-[#FF6500] text-sm font-medium mb-2">Planned Features:</h5>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start text-gray-400 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#FF6500] mr-2">▸</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-[#FF6500] text-sm font-medium mb-2">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-[#0B192C] text-[#FF6500]/80 text-xs rounded-full border border-[#1E3E62]"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(30, 62, 98, 0.3)"
                        }}
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