import React from 'react';

/**
 * Componente Button reutilizable
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {Function} props.onClick - Función a ejecutar al hacer click
 * @param {string} props.variant - Variante del botón: 'primary', 'secondary', 'success', 'danger'
 * @param {string} props.type - Tipo de botón: 'button', 'submit', 'reset'
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {string} props.className - Clases CSS adicionales
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  disabled = false, 
  className = '' 
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-get-started',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger'
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;



