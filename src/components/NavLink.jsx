import React from 'react';

const NavLink = ({ to, setPage, isActive = false, isExternal = false, onNavigate, children }) => {
  const handleClick = (e) => {
    if (isExternal) {
      if (onNavigate) {
        onNavigate();
      }
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    e.preventDefault();

    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setPage(to);
    }

    if (onNavigate) {
      onNavigate();
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



