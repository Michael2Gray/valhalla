import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Status } from './status.component';

export default {
  title: 'Atoms/Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => (
  <div className="flex">
    <Status {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Status',
};
