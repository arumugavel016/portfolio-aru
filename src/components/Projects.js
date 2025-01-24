import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This project is a dynamic portfolio website built with React for the frontend, Node.js for the backend, and HTML for structure. It showcases projects, skills, and achievements with an interactive and responsive design.',
      technologies: ['React', 'CSS']
    },
    {
      title: 'Flappy Bird Game',
      description: 'This project is a Python-based Flappy Bird clone built with Pygame. Players control a bird, navigating it through dynamically generated pipes while avoiding collisions. The game features smooth mechanics, scoring, and sound effects, delivering a fun and engaging experience. It highlights essential game development concepts like physics, animation, and event handling ',
      technologies: ['Python']
    },
    {
        title: 'Book Recommendation System',
        description: 'This project uses Datascience and Python to build a system to recommend a book based on user prefrenceit employee collabrative fliterring and content based algorithm for personlized algorithm',
        technologies: ['Data Science ','Python']
    },
    {
        title: 'Blood Bank Management System',
        description: 'This Java-based system manages blood donation records using a relational database, enabling efficient tracking of donors, recipients, and blood inventory. It streamlines the entire process with real-time updates and search functionality.',
        technologies: ['DBMS', 'JAVA']
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;