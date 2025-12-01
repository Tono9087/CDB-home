import React from 'react';

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



