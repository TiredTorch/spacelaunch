import { Story, Meta } from '@storybook/react';
import { SubtitleBox } from './SubtitleBox';

export default {
	component: SubtitleBox,
	title: 'Common/SubtitleBox',
} as Meta;

const Template: Story = (args) => <SubtitleBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
