import { Stack, styled } from '@mui/material';
import { ContentSectionProps } from './ContentSection.types';

const StyledStack = styled(Stack)(({ theme }) => ({
	position: 'relative',
	top: '-120px',
	width: '75vw',
	margin: 'auto',
	padding: '4%',
	backgroundColor: theme.palette.primary.light,
	[theme.breakpoints.down('lg')] : {
		padding: '3%',
		width: '80vw'
	},
	[theme.breakpoints.down('md')] : {
		padding: '2%',
		width: '90vw'
	},
	[theme.breakpoints.down('sm')] : {
		padding: '2%',
		width: '100vw'
	},
}));

export const ContentSection = (props: ContentSectionProps) => {
	return (
		<StyledStack>
			{props.children}
		</StyledStack>
	);
};

export default ContentSection;
