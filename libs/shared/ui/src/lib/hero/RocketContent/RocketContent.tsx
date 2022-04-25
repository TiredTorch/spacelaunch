import { ListItem, Stack, styled, Typography } from '@mui/material';
import { 
	useGetRocketQuery 
} from 'libs/redux/store/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';

const StyledStack = styled(Stack)(({ theme }) => ({
	width: '40vw',
	[theme.breakpoints.down('lg')] : {
		width: '70vw'
	},
	[theme.breakpoints.down('md')] : {
		width: '80vw'
	},
	[theme.breakpoints.down('sm')] : {
		width: '90vw'
	},
}));
const StyledListItem = styled(ListItem)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});
const StyledTypography = styled(Typography)({
	textAlign: 'center',
});

export const RocketContent = () => {
  
	const { id } = useParams();
	const { data } = useGetRocketQuery(`${id}`);
  
	return (
		<StyledStack spacing={{
			xl: '30px', 
			lg: '20px', 
			md: '30px', 
			sm: '20px', 
			xs: '10px'
		}}>
			<StyledListItem>
				<StyledTypography variant="h1">
					{data?.full_name??'Not found'}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2" fontWeight={400}>
					{`${data?.launch_service_provider.name} 
          (${data?.launch_service_provider.abbrev})`}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h2">
					{data?.launch_service_provider.founding_year}
				</StyledTypography>
			</StyledListItem>
			<StyledListItem>
				<StyledTypography variant="h5">
					{data?.description}
				</StyledTypography>
			</StyledListItem>
		</StyledStack>
	);
};

export default RocketContent;
