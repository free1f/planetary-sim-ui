import { fn } from 'storybook/test';
import { HexagonRhombus } from './HexagonRhombus';

export default {
  title: 'Example/Hexagon',
  component: HexagonRhombus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    glowEffect: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    label: '',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'S',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'LARGE',
  },
};

export const CustomColors = {
  args: {
    backgroundColor: '#ff6b6b',
    borderColor: '#ffa500',
    label: 'FIRE',
  },
};

export const Interactive = {
  args: {
    backgroundColor: '#9b59b6',
    borderColor: '#e74c3c',
    label: 'CLICK',
    onClick: fn(),
  },
};
