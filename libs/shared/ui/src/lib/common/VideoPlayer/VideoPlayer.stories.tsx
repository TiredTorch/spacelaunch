import { Story, Meta } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

export default {
	component: VideoPlayer,
	title: 'Common/VideoPlayer',
} as Meta;

const Template: Story = (args) => <VideoPlayer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
