import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './card.component';

export default {
  title: 'Atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="p-4 text-center">This is a Card</div>,
};
