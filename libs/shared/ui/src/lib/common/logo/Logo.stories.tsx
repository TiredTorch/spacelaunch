import { Story, Meta } from '@storybook/react';
import { Logo } from './Logo';

export default {
	component: Logo,
	title: 'Common/Logo',
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
