import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectDetailsData } from '../data/Data';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectDetailsData.projects.find(p => p.id === projectId);

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleBackToProjects = () => {
    navigate('/#projects');
    
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0B192C] min-h-screen text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          whileHover={{ x: -5 }}
          className="mb-8"
        >
          <button 
            onClick={handleBackToProjects}
            className="flex items-center text-[#FF6500] hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </button>
        </motion.div>

        {/* Project Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.div 
            className="lg:w-2/3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-[#1E3E62] text-[#FF6500] text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-gray-400 text-sm">Role</h3>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Duration</h3>
                <p className="text-white">{project.duration}</p>
              </div>
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#FF6500] rounded-md hover:bg-[#FF4500] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1E3E62] rounded-md hover:bg-[#2E4E72] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>

          <motion.div 
            className="lg:w-1/3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-xl border border-[#1E3E62]"
            />
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#FF6500] border-b border-[#1E3E62] pb-2">
                Project Details
              </h2>
              <ul className="space-y-4">
                {project.details.map((detail, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className="text-[#FF6500] mr-3 mt-1">▹</span>
                    <span className="text-gray-300">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#FF6500] border-b border-[#1E3E62] pb-2">
                Challenges & Solutions
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <span className="text-[#FF6500] mr-3 mt-1">▹</span>
                    <span className="text-gray-300">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="bg-[#1E3E62]/30 p-6 rounded-lg border border-[#1E3E62] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-bold mb-4 text-[#FF6500]">Technologies Used</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech, i) => (
                  <motion.li 
                    key={i}
                    className="text-gray-300"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <span className="text-[#FF6500] mr-2">•</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#1E3E62]/30 p-6 rounded-lg border border-[#1E3E62]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-xl font-bold mb-4 text-[#FF6500]">Project Impact</h2>
              <ul className="space-y-4">
                {project.impact.map((impact, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 + i * 0.1 }}
                  >
                    <h3 className="font-semibold text-white">{impact.title}</h3>
                    <p className={`text-gray-300 ${impact.title === 'Client Feedback' ? 'italic' : ''}`}>
                      {impact.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Screenshots Section - Conditionally rendered */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#FF6500] border-b border-[#1E3E62] pb-2">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, i) => (
                <motion.img 
                  key={i}
                  src={screenshot} 
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-lg border border-[#1E3E62] hover:border-[#FF6500] transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;