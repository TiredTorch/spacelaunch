import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';

export default {
	component: Button,
	title: 'Common/Button',
} as Meta;

const Template: Story = (args) => (
	<BrowserRouter>
		<Button  {...args} />
	</BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
