import React, { useState } from 'react';

const Home = () => {
  const [hoveredHobby, setHoveredHobby] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const hobbies = [
    {
      name: 'Basketball',
      description: 'Played at JSA Bordeaux for 10 years, participated in the junior national championship. Played at PUC Paris in Regional 3 since 2023. Center / Forward. Can dunk, sometimes...'
    },
    {
      name: 'Music',
      description: 'Favorite artists : 21 Pilots, Electric Light Orchestra, Luv Resval. Played the piano for nearly 20 years. Proud owner of a turntable and some sweet vinyls. Did some computer music on FL Studio, even released a clip on Youtube.'
    },
    {
      name: 'Sailing',
      description: 'Was sailing instructor at Sanguinet sailing club on windsurfing and catamaran. Lead cruises in the Mediteranian Sea.'
    },
    {
      name: 'BoardGames',
      description: 'Favorite games : Terraforming Mars, Gaia Project, Scythe. Loving very strategic and complex games.'
    },
    {
      name: 'Computer',
      description: 'Built my own PC, next is a home server. Favorite Video Games : Civilization VI, Hearthstone, Factorio.'
    }
  ];

  return (
    <main className="home-dashboard">
      <section className="card photo-card">
        <div className="photo-placeholder" aria-label="photo placeholder" />
        <h2>Niels Sageaux</h2>
        <p>Developer - Software Engineer</p>
      </section>

      <section className="card summary-card">
        <h2>About</h2>
        <p>
          Bonjour ! I'm Niels, a french developer from Bordeaux, now in Paris. 
          I'm passionate about software development and I'm always looking for new challenges. 
          I'm currently freelance, working on a variety of projects but I'm open to new opportunities.
        </p>
      </section>

      <section className="card education-card">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>Lycée Montaigne - Bordeaux</h3>
            <p>PCSI/PC - Math, Physics, Chemistry</p>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748b' }}>2016 &ndash; 2018</p>
          </div>
          <div className="education-item">
            <h3>ESPCI Paris - Paris</h3>
            <p>Fundamental sciences engineer, specializing in materials physics.</p>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748b' }}>2018 &ndash; 2023</p>
          </div>
          <div className="education-item">
            <h3>Mines Paris - Paris</h3>
            <p>Civil Engineer, specializing in materials physics and computer science.</p>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748b' }}>2021 &ndash; 2023</p>
          </div>
        </div>
      </section>

      <section className="card hobbies-card">
        <h2>Hobbies</h2>
        <ul className="chip-list">
          {hobbies.map((hobby, index) => (
            <li 
              key={index}
              className="chip hobby-chip"
              style={{
                border: hobby.name === 'Basketball' ? '2px solid orange' : 
                       hobby.name === 'Music' ? '2px solid black' :
                       hobby.name === 'Computer' ? '2px solid green' :
                       hobby.name === 'Sailing' ? '2px solid blue' : '2px solid purple',
                color: hobby.name === 'Basketball' ? 'orange' : 
                       hobby.name === 'Music' ? 'black' :
                       hobby.name === 'Computer' ? 'green' :
                       hobby.name === 'Sailing' ? 'blue' : 'purple'
              }}
              onMouseEnter={(e) => {
                setHoveredHobby(hobby);
                setTooltipPosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setHoveredHobby(null)}
            >
              {hobby.name}
            </li>
          ))}
        </ul>
        {hoveredHobby && (
          <div 
            className="hobby-tooltip"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y - 10
            }}
          >
            <h4>{hoveredHobby.name}</h4>
            <p>{hoveredHobby.description}</p>
          </div>
        )}
      </section>

      <section className="card contact-card">
        <h2>Contacts & Links</h2>
        <p>
          Email: <a href="mailto:niels.sageaux@gmail.com">niels.sageaux@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/NielsSageaux">/NielsSageaux</a>
        </p>
        <p>
          Linkedin: <a href="https://www.linkedin.com/in/niels-sageaux/">/niels-sageaux</a>
        </p>
        <p>
          Phone: <a href="tel:+33695368938">+33 6 95 36 89 38</a>
        </p>
      </section>
    </main>
  );
};

export default Home;


