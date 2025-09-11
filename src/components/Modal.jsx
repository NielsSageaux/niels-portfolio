import React, { useEffect } from 'react';

// Import project images
import p1Logo from '../assets/p1/logo.png';
import p2Logo from '../assets/p2/logo.png';
import p2Image from '../assets/p2/image.png';
import p3Logo from '../assets/p3/logo.png';
import p3Image from '../assets/p3/image.png';
import p4Logo from '../assets/p4/logo.png';
import p4Image from '../assets/p4/image.png';
import p5Logo from '../assets/p5/logo.png';
import p5Image from '../assets/p5/image.png';
import p6Logo from '../assets/p6/logo.png';
import p6Image from '../assets/p6/image.png';
import p7Logo from '../assets/p7/logo.png';
import p7Image from '../assets/p7/image.png';
import p8Logo from '../assets/p8/logo.png';
import p8Image from '../assets/p8/image.gif';

// Create a mapping object for easy access
const projectAssets = {
  p1: { logo: p1Logo },
  p2: { logo: p2Logo, image: p2Image },
  p3: { logo: p3Logo, image: p3Image },
  p4: { logo: p4Logo, image: p4Image },
  p5: { logo: p5Logo, image: p5Image },
  p6: { logo: p6Logo, image: p6Image },
  p7: { logo: p7Logo, image: p7Image },
  p8: { logo: p8Logo, image: p8Image }
};

const Modal = ({ open, onClose, title, children, project }) => {
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('modal-open');
    } else {
      document.documentElement.classList.remove('modal-open');
    }
    
    return () => {
      document.documentElement.classList.remove('modal-open');
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal modal-animate" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {project && (
          <div className="modal-header">
            <div className="modal-logo">
              <img src={projectAssets[project.id]?.logo} alt={`${title} logo`} />
            </div>
            {title && <h2>{title}</h2>}
          </div>
        )}
        
        {!project && title && <h2>{title}</h2>}
        
        <div className="modal-body">
          {project && project.description && (
            <p className="modal-short-desc">{project.description}</p>
          )}

          {children}
        </div>

        <p style={{margin: '2rem 0', textAlign: 'justify'}}>{project.longDescription}</p>
                  
           {project && (
             <div className="modal-image">
               <img
                 src={projectAssets[project.id]?.image}
                 alt={`${title} image`}
               />
             </div>
           )}

        {project.link ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <a className="btn-secondary" href={project.link} target="_blank" rel="noreferrer">Visit</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;


