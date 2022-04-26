import { Story, Meta } from '@storybook/react';
import { InfoString } from './InfoString';

export default {
	component: InfoString,
	title: 'Common/InfoString',
} as Meta;

const Template: Story = (args) => <InfoString {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
