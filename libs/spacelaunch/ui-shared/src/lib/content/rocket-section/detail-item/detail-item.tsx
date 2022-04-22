import { Stack, styled, Typography } from '@mui/material';
import Logo from '../../../common/logo/logo';

/* eslint-disable-next-line */
export interface DetailItemProps {
  logo: string,
  title: string,
  children: React.ReactNode
}

const StyledStack = styled(Stack)({
	width: '33%',
	margin: '50px 0',
	justifyContent: 'center',
	alignItems: 'center',
});

export function DetailItem(props: DetailItemProps) {
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
}

export default DetailItem;
