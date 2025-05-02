import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroData } from '../data/Data';

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "backOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="relative py-16 md:py-20 lg:py-24 bg-[#0B192C]"
            style={{
                backgroundImage: heroData.backgroundImage,
                backgroundSize: 'cover',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Content - Left Side */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-5"
                        variants={containerVariants}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                            variants={itemVariants}
                        >
                            Hi, I'm <span className="text-[#FF6500]">{heroData.name}</span>
                        </motion.h1>

                        <motion.h2
                            className="text-xl md:text-2xl font-semibold text-gray-300"
                            variants={itemVariants}
                        >
                            <span className={`border-b-2 border-[${heroData.highlightColor}]`}>
                                {heroData.title}
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-base md:text-lg text-gray-300"
                            variants={itemVariants}
                        >
                            {heroData.description}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 pt-2"
                            variants={itemVariants}
                        >
                            <a
                                href={heroData.links.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-5 py-2.5 bg-[${heroData.highlightColor}] text-white text-sm md:text-base font-medium rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {heroData.links.linkedin.icon}
                                {heroData.links.linkedin.text}
                            </a>

                            <a
                                href={heroData.links.resume.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center px-4 py-2 border border-[${heroData.highlightColor}] text-sm font-medium rounded-md text-[${heroData.highlightColor}] hover:text-white hover:bg-[${heroData.highlightColor}] transition-all duration-300 hover:scale-105`}
                            >
                                {heroData.links.resume.icon}
                                {heroData.links.resume.text}
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image - Right Side */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                        variants={imageVariants}
                    >
                        <div className="relative group w-full max-w-md">
                            <motion.div
                                className={`absolute -inset-1 bg-[${heroData.secondaryColor}] rounded-md blur opacity-75 group-hover:opacity-100 transition-all duration-300`}
                                whileHover={{ scale: 1.02 }}
                            />
                            <motion.img
                                src={heroData.image.src}
                                alt={heroData.image.alt}
                                className={`relative w-full h-auto rounded-md border-2 border-[${heroData.secondaryColor}] object-cover shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]`}
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
