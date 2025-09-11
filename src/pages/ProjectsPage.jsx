import React, { useMemo, useState } from 'react';
import projectsData from '../data/projects.js';
import Modal from '../components/Modal';
import { getLogoSrc, getBrandInfo } from '../data/brands.js';

const unique = (arr) => Array.from(new Set(arr)).sort();

const LogoCircle = ({ name }) => {
  const meta = getBrandInfo(name);
  const style = { border: `2px solid ${meta.color}`, color: meta.text || '#fff' };
  const logoSrc = getLogoSrc(name);
  
  return (
    <span className="logo-circle" style={style} title={name}>
      {logoSrc ? (
        <img src={logoSrc} alt={name} className="tech-logo" />
      ) : (
        meta.short
      )}
    </span>
  );
};

const ChipButton = ({ label, active, color, onClick }) => {
  const style = { '--chip-color': color, '--chip-text': getBrandInfo(label).text };
  return (
    <button type="button" className={`chip-btn${active ? ' selected' : ''}`} style={style} onClick={onClick}>
      {label}
    </button>
  );
};

const ProjectsPage = () => {
  const [techFilters, setTechFilters] = useState([]);
  const [langFilters, setLangFilters] = useState([]);
  const [active, setActive] = useState(null);

  const allTechs = useMemo(() => unique(projectsData.flatMap(p => p.techs || [])), []);
  const allLangs = useMemo(() => unique(projectsData.flatMap(p => p.languages || [])), []);

  const projects = useMemo(() => {
    return projectsData.filter(p => {
      const okTech = techFilters.length ? (p.techs || []).some(t => techFilters.includes(t)) : true;
      const okLang = langFilters.length ? (p.languages || []).some(l => langFilters.includes(l)) : true;
      return okTech && okLang;
    });
  }, [techFilters, langFilters]);

  const toggleLang = (lang) => {
    setLangFilters((prev) => (
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    ));
  };

  const toggleTech = (tech) => {
    setTechFilters((prev) => (
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    ));
  };

  const clearFilters = () => { setTechFilters([]); setLangFilters([]); };

  return (
    <main className="section">
      <h1>Projects & Experiences</h1>
      <div className="filters">
        <div className="filter-chips">
          <span className="filter-label">Tech:</span>
          <ChipButton label="All" active={!techFilters.length} color="#94A3B8" onClick={() => setTechFilters([])} />
          {allTechs.map(t => (
            <ChipButton key={t} label={t} active={techFilters.includes(t)} color={getBrandInfo(t).color} onClick={() => toggleTech(t)} />
          ))}
        </div>
        <div className="filter-chips">
          <span className="filter-label">Language:</span>
          <ChipButton label="All" active={!langFilters.length} color="#94A3B8" onClick={() => setLangFilters([])} />
          {allLangs.map(l => (
            <ChipButton key={l} label={l} active={langFilters.includes(l)} color={getBrandInfo(l).color} onClick={() => toggleLang(l)} />
          ))}
        </div>
        <div className="clear-filters">
          {(techFilters.length || langFilters.length) ? (
            <button type="button" className="chip-btn" onClick={clearFilters}>Clear</button>
          ) : null}
        </div>
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card" onClick={() => setActive(p)}>
            <div className="project-logos">
              {(p.techs || []).map(t => <LogoCircle key={t} name={t} />)}
              {(Array.isArray(p.languages) ? p.languages : [p.languages]).filter(Boolean).map(l => (
                <LogoCircle key={`lang-${l}`} name={l} />
              ))}
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
        project={active}
      >
      </Modal>
    </main>
  );
};

export default ProjectsPage;