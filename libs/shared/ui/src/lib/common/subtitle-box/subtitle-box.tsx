import { Chip, styled } from '@mui/material';

/* eslint-disable-next-line */
export interface SubtitleBoxProps {
  title: string
}

const StyledChip = styled(Chip)(({ theme }) => ({
	background: '#4A00E0',
	padding: '10px 30px',
	borderRadius: '50px',

	width: '256px',
	fontStyle: 'italic',
	fontSize: theme.typography.h5.fontSize,
  
	[theme.breakpoints.down('lg')] : {
		padding: '8px 24px',
	},
	[theme.breakpoints.down('md')] : {
		padding: '6px 18px',
	},
	[theme.breakpoints.down('sm')] : {
		padding: '4px 10px',
	},
	[theme.breakpoints.down('xs')] : {
		padding: '0px 0px',
	},
}));

export function SubtitleBox(props: SubtitleBoxProps) {
	return (
		<StyledChip label={props.title}/>
	);
}

export default SubtitleBox;
