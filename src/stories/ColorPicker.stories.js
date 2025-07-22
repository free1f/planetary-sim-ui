import { fn } from 'storybook/test';
import { ColorPicker } from './ColorPicker';

export default {
  title: 'Example/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gridSize: { 
      control: { type: 'range', min: 2, max: 12, step: 1 },
      description: 'Size of the grid (e.g., 8 for 8x8)'
    },
    hexagonSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showGrid: { control: 'boolean' },
    colors: { control: 'object' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {},
};

export const SmallGrid = {
  args: {
    gridSize: 4,
    hexagonSize: 'medium',
  },
};

export const ChessBoard = {
  args: {
    gridSize: 8,
    hexagonSize: 'small',
    colors: ['#8B4513', '#DEB887'], // Brown and tan like chess
  },
};

export const ColorfulLarge = {
  args: {
    gridSize: 6,
    hexagonSize: 'medium',
    colors: [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
      '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
      '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
    ],
  },
};
