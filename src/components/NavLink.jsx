import React from 'react';

/**
 * Componente NavLink reutilizable para links de navegación
 * @param {Object} props
 * @param {string} props.to - Página destino o hash
 * @param {Function} props.setPage - Función para cambiar de página
 * @param {boolean} props.isActive - Si el link está activo
 * @param {boolean} props.isExternal - Si es un link externo
 * @param {React.ReactNode} props.children - Contenido del link
 */
const NavLink = ({ to, setPage, isActive = false, isExternal = false, children }) => {
  const handleClick = (e) => {
    if (isExternal) {
      // Link externo, abrir en nueva pestaña
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    e.preventDefault();
    
    // Si es un hash (empieza con #), hacer scroll suave
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Cambiar de página
      setPage(to);
    }
  };

  const classes = isActive ? 'active' : '';

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
};

export default NavLink;



