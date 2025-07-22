import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container';
import { HexagonRhombus } from './HexagonRhombus';
import './container.css';

/** ColorPicker component with hexagon grid arranged like a chess table */
export const ColorPicker = ({
  gridSize = 8,
  hexagonSize = 'small',
  colors = [
    '#FF6B6B', '#FF0000', '#FF4500', '#FF8C00', 
    '#FFD700', '#FFFF00', '#0000CD', '#4B0082', 
    '#8B008B', '#DA70D6', '#FFB6C1', '#9ACD32'
  ],
  showGrid = true,
  ...props
}) => {
  const createHexagonGrid = () => {
    const hexagons = [];
    const rows = 3; // Number of rows
    const hexagonsPerRow = [6, 6, 6, 2]; // Different number of hexagons per row
    
    let colorIndex = 0;
    
    for (let row = 0; row < rows; row++) {
      const hexCount = hexagonsPerRow[row];
      const isEvenRow = row % 2 === 0;
      
      for (let col = 0; col < hexCount; col++) {
        const backgroundColor = colors[colorIndex % colors.length];
        
        hexagons.push(
          <div
            key={`hex-${row}-${col}`}
            style={{
              gridRow: row + 1,
              gridColumn: `${col + 1} / ${col + 2}`,
              marginLeft: isEvenRow ? '0' : '75px', // Offset every other row
              justifySelf: 'center'
            }}
          >
            <HexagonRhombus
              size={hexagonSize}
              backgroundColor={backgroundColor}
              borderColor={backgroundColor}
              glowEffect={false}
              className="grid-hexagon"
            />
          </div>
        );
        
        colorIndex++;
      }
    }
    
    return hexagons;
  };

  return (
    <Container
      label='Color Selection'
      width='500px'
      {...props}
    >
      {showGrid && (
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 70px)',
            gridTemplateRows: 'repeat(4, 60px)',
            gap: '2px',
            padding: '10px',
            justifyContent: 'center'
          }}
        >
          {createHexagonGrid()}
        </div>
      )}
    </Container>
  );
};

ColorPicker.propTypes = {
  /** Size of the grid (e.g., 8 for 8x8 like chess) */
  gridSize: PropTypes.number,
  /** Size of individual hexagons */
  hexagonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Array of colors to display in the grid */
  colors: PropTypes.arrayOf(PropTypes.string),
  /** Show the hexagon grid */
  showGrid: PropTypes.bool,
  /** Optional click handler */
  onClick: PropTypes.func,
};
