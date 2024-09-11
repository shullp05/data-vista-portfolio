import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import anime from 'animejs/lib/anime.es.js';

const ProjectCard = ({ project, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    anime({
      targets: `#project-${project.title.replace(/\s+/g, '-').toLowerCase()} .project-image`,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    anime({
      targets: `#project-${project.title.replace(/\s+/g, '-').toLowerCase()} .project-image`,
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  return (
    <Card 
      id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`project-card overflow-hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transition-shadow duration-300 ${isHovered ? 'shadow-lg' : 'shadow'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="project-image w-full h-48 object-cover transition-transform duration-300" />
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <Button asChild variant="secondary" className="transform translate-y-4 transition-transform duration-300">
            <a href={project.link}>View Project</a>
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
          {project.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-3`}>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>
          <a href={project.link}>Learn More →</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;