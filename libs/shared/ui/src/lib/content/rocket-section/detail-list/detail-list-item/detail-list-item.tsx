import { Stack, styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface DetailListItemProps {
  title: string,
  value: string | number
}

const StyledStack = styled(Stack)({
	margin: '10px 0'
});

export function DetailListItem(props: DetailListItemProps) {
	return (
		<StyledStack>
			<Typography 
				variant="h5" 
				fontWeight={400} 
				align={'center'}
				className={'detail'}
			>
				{props.title}
			</Typography>
			<Typography 
				variant="h5" 
				align={'center'}
				className={'detail'}
			>
				{props.value}
			</Typography>
		</StyledStack>
	);
}

export default DetailListItem;
