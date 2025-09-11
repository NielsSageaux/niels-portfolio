import React, { useEffect } from 'react';

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
              <img src={`/src/assets/${project.id}/logo.png`} alt={`${title} logo`} />
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
                 src={`/src/assets/${project.id}/image.png`}
                 alt={`${title} image`}
                 onError={e => { 
                   // Try .gif if .png fails
                   if (e.target.src.endsWith('.png')) {
                     e.target.src = `/src/assets/${project.id}/image.gif`;
                   } else {
                     e.target.style.display = 'none';
                   }
                 }}
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


