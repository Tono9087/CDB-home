import React from 'react';

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



