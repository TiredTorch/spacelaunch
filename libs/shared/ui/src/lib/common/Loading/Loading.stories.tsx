import { Story, Meta } from '@storybook/react';
import { Loading } from './Loading';

export default {
	component: Loading,
	title: 'Common/Loading',
} as Meta;

const Template: Story = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
