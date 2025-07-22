import React from 'react';
import PropTypes from 'prop-types';
import './hexagon.css';

/** Simple hexagon component with customizable colors and effects */
export const HexagonRhombus = ({
  size = 'medium',
  backgroundColor = '#009fff',
  borderColor = '#009fff',
  glowEffect = true,
  label,
  className = '',
  ...props
}) => {
  const hexagonStyle = {
    background: `linear-gradient(135deg, ${backgroundColor}, ${borderColor})`,
  };

  if (glowEffect) {
    hexagonStyle.boxShadow = `
      0 0 15px rgba(28, 72, 122, 0.6),
      0 0 25px rgba(0, 159, 255, 0.4),
      0 0 35px rgba(0, 159, 255, 0.2)
    `;
  }

  return (
    <div 
      className={`hexagon hexagon--${size} ${className}`}
      {...props}
    >
      <div 
        className="hexagon-inner"
        style={hexagonStyle}
      >
        {label && (
          <div className="hexagon-content">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

HexagonRhombus.propTypes = {
  /** How large should the hexagon be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Background color */
  backgroundColor: PropTypes.string,
  /** Border/accent color */
  borderColor: PropTypes.string,
  /** Enable glow effect */
  glowEffect: PropTypes.bool,
  /** Text content to display in center */
  label: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
};
