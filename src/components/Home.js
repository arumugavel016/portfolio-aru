import React from 'react';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
      <img 
          src="/images/arupic.jpg" 
          alt="Profile" 
          className="profile-image"
          />
        <h1>ARUMUGAVEL K </h1>
        <p>Web Developer & Designer</p>
        <p>arumugavel02@gmail.com</p>
        <p>9786634853</p>
        <div className="home-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Hire Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;