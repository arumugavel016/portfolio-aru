import React from 'react';

function About() {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'c', 'c++', 'java', 'python'];
  

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Passionate web developer creating innovative digital solutions
          Highly motivated and results-oriented student pursuing a degree in B.Tech Artificial Intelligence 
          and data Science with a strong interest in Machine Learning. Eager to gain practical experience and 
          contribute to a team environment through effective data-driven strategies. 

        </p>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;