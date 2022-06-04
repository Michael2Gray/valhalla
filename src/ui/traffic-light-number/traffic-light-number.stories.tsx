import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TrafficLightNumber } from './traffic-light-number.component';

export default {
  title: 'Atoms/Traffic Light Number',
  component: TrafficLightNumber,
} as ComponentMeta<typeof TrafficLightNumber>;

const Template: ComponentStory<typeof TrafficLightNumber> = (args) => (
  <TrafficLightNumber {...args} />
);

export const Default = Template.bind({});
Default.args = { value: 10 };
