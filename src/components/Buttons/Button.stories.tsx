import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button'; // Import your Button component and ButtonProps

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: action('clicked'), 
  },
  render: Template,
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    onClick: action('clicked'),
  },
  render: Template,
};

export const Black = {
  args: {
    variant: 'black',
    children: 'Black Button',
    onClick: action('clicked'),
  },
  render: Template,
};

export const Underlined = {
  args: {
    variant: 'underlined',
    children: 'Underlined Button',
    onClick: action('clicked'),
  },
  render: Template,
};
