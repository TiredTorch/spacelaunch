import { Stack, styled, Typography } from '@mui/material';
import Logo from '../../../common/Logo/Logo';
import { DetailItemProps } from './DetailItem.types';

const StyledStack = styled(Stack)({
	width: '33%',
	margin: '50px 0',
	justifyContent: 'center',
	alignItems: 'center',
});

export const DetailItem = (props: DetailItemProps) => {
	return (
		<StyledStack>
			<Logo logoSize={'md'} src={props.logo}/>
			<Typography 
				variant={'h4'} 
				align='center'
				className='detail'
			>
				{props.title}
			</Typography>
			{props.children}
		</StyledStack>
	);
};

export default DetailItem;
