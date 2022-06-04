import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chip } from './chip.component';

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div className="flex">
    <Chip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Chip',
};
