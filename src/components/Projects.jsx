
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/Data";

const Projects = ({ theme }) => {
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const cardsRef = useRef([]);
  const containerRef = useRef();

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
      setCurrentSlide(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Consistent card heights
  useEffect(() => {
    const calculateHeights = () => {
      if (!cardsRef.current.length) return;
      let maxHeight = 0;
      cardsRef.current.forEach(card => card && (maxHeight = Math.max(maxHeight, card.offsetHeight)));
      cardsRef.current.forEach(card => card && (card.style.height = `${maxHeight}px`));
    };
    const timer = setTimeout(calculateHeights, 100);
    return () => clearTimeout(timer);
  }, [currentSlide, cardsToShow]);

  const totalSlides = Math.ceil(projectsData.projects.length / cardsToShow);

  const nextSlide = () => setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, when: "beforeChildren" } },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: isDark
      ? "0 10px 25px -5px rgba(0,0,0,0.3)"
      : "0 10px 25px -5px rgba(0,0,0,0.2)",
  };

  const bgColor = isDark ? "#0B192C" : "#ffffff";
  const cardBg = isDark ? "rgba(30, 62, 98, 0.2)" : "rgba(0,0,0,0.05)";
  const textColor = isDark ? "white" : "black";
  const subTextColor = isDark ? "#D1D5DB" : "#6B7280";
  const accentColor = "#FF6500";

  return (
    <section id="projects" className="py-16 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor }}>
            {projectsData.title} <span style={{ color: accentColor }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: accentColor }}></div>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: subTextColor }}>
            {projectsData.subtitle}
          </p>
        </div>

        {/* Slider */}
        <div className="relative" ref={containerRef}>
          <div className="relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`${currentSlide}-${cardsToShow}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap"
              >
                {projectsData.projects
                  .slice(currentSlide * cardsToShow, (currentSlide + 1) * cardsToShow)
                  .map((project, index) => (
                    <motion.div
                      key={`${currentSlide}-${index}`}
                      variants={cardVariants}
                      className={`w-full ${cardsToShow >= 2 ? "md:w-1/2" : ""} ${cardsToShow >= 3 ? "lg:w-1/3" : ""} px-2 pb-4`}
                      layout
                    >
                      <div className="project-card-wrapper h-full">
                        <motion.div
                          ref={el => (cardsRef.current[index] = el)}
                          className="project-card rounded-lg overflow-hidden border flex flex-col h-full transition-all duration-300"
                          style={{ backgroundColor: cardBg, borderColor: isDark ? "#1E3E62" : "#D1D5DB" }}
                          whileHover={cardHover}
                        >
                          <div className="h-48 overflow-hidden flex-shrink-0 relative">
                            <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                              <div className="flex justify-between items-end">
                                <div>
                                  <h3 className="text-xl font-bold" style={{ color: textColor }}>{project.title}</h3>
                                  <p className="text-sm" style={{ color: subTextColor }}>{project.role} • {project.duration}</p>
                                </div>
                                <div className="flex gap-2">
                                  {project.liveUrl && (
                                    <motion.a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`p-2 rounded-full transition-colors`}
                                      style={{ backgroundColor: cardBg, color: accentColor }}
                                      whileHover={{ scale: 1.1, backgroundColor: accentColor, color: "#fff" }}
                                      onClick={e => e.stopPropagation()}
                                    >
                                      <FiExternalLink className="w-4 h-4" />
                                    </motion.a>
                                  )}
                                  {project.githubUrl && (
                                    <motion.a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`p-2 rounded-full transition-colors`}
                                      style={{ backgroundColor: cardBg, color: accentColor }}
                                      whileHover={{ scale: 1.1, backgroundColor: accentColor, color: "#fff" }}
                                      onClick={e => e.stopPropagation()}
                                    >
                                      <FiGithub className="w-4 h-4" />
                                    </motion.a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 flex-grow">
                            <p style={{ color: subTextColor }} className="mb-4">{project.description}</p>
                            <ul className="space-y-2 mb-4">
                              {project.details.slice(0, 2).map((detail, i) => (
                                <motion.li key={i} className="flex items-start" style={{ color: subTextColor }} whileHover={{ x: 5 }}>
                                  <span style={{ color: accentColor }} className="mr-2">▹</span>
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 3).map((tag, i) => (
                                <motion.span
                                  key={i}
                                  className="px-3 py-1 text-xs rounded-full border transition-all"
                                  style={{ backgroundColor: bgColor, borderColor: isDark ? "#1E3E62" : "#D1D5DB", color: accentColor }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                          <Link
                            to={`/projects/${project.id}`}
                            className={`block text-center py-3 transition-colors`}
                            style={{ backgroundColor: cardBg, color: accentColor }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = accentColor}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = cardBg}
                          >
                            View Details
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {projectsData.projects.length > cardsToShow && (
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2">
              <motion.button
                onClick={prevSlide}
                className="pointer-events-auto p-2 sm:p-3 rounded-full transition-colors z-10 shadow-lg"
                style={{ backgroundColor: cardBg, color: accentColor, backdropFilter: 'blur(2px)' }}
                whileHover={{ scale: 1.1, backgroundColor: accentColor, color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="pointer-events-auto p-2 sm:p-3 rounded-full transition-colors z-10 shadow-lg"
                style={{ backgroundColor: cardBg, color: accentColor, backdropFilter: 'blur(2px)' }}
                whileHover={{ scale: 1.1, backgroundColor: accentColor, color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          )}
        </div>

        {/* Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all`}
                style={{ backgroundColor: currentSlide === index ? accentColor : cardBg }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
