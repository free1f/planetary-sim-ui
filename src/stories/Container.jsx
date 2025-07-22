import React from 'react';
import BackArrow from '../assets/ArrowBack.svg';

import PropTypes from 'prop-types';

import './container.css';

/** Primary UI component for user interaction */
export const Container = ({
  backgroundColor = '#1c487a',
  borderColor = '#009fff',
  borderRadius = '15px',
  label,
  width,
  children,
  ...props
}) => {
  return (
    <div 
      style={{ 
        backgroundColor, 
        borderRadius, 
        width, 
        padding: '10px', 
        background: `linear-gradient(${backgroundColor}, ${backgroundColor}) padding-box, linear-gradient(to bottom, ${borderColor}, #24a7cb) border-box`,
        border: '5px solid transparent',
        boxShadow: `
          0 0 10px rgba(28, 72, 122, 0.6),
          0 0 20px rgba(36, 167, 203, 0.4),
          0 0 30px rgba(36, 167, 203, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `
      }}
      {...props}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            backgroundColor: '#24a7cb',
            padding: '3px 10px',
            borderRadius: '15px',
            fontSize: '12px',
          }}>{label}</span>
          <div>
            <img src={BackArrow} className="back-arrow" alt="Go back" />
          </div>
        </div>
        <div style={{
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  borderRadius: PropTypes.string,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** Border/accent color */
  borderColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
