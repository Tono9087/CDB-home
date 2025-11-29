import React from 'react';

/**
 * Componente Section reutilizable para secciones
 * @param {Object} props
 * @param {string} props.id - ID de la sección
 * @param {string} props.title - Título de la sección
 * @param {string} props.subtitle - Subtítulo de la sección
 * @param {React.ReactNode} props.children - Contenido de la sección
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.background - Tipo de fondo: 'light', 'dark', o vacío para default
 */
const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  background = '' 
}) => {
  const backgroundClass = background === 'light' ? 'light-background' : 
                         background === 'dark' ? 'dark-background' : '';
  
  const sectionClasses = `section ${backgroundClass} ${className}`.trim();

  return (
    <section id={id} className={sectionClasses}>
      <div className="container">
        {(title || subtitle) && (
          <div className="container section-title" data-aos="fade-up">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;



