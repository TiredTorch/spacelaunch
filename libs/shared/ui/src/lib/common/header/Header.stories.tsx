import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

export default {
	component: Header,
	title: 'Common/Header',
} as Meta;

const Template: Story = (args) => (
	<BrowserRouter>
		<Header {...args} />
	</BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
