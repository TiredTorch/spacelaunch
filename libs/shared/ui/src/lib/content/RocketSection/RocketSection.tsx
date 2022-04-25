import { Stack, styled } from '@mui/material';
import { 
	useGetRocketQuery 
} from 'libs/redux/store/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';
import DetailItem from './DetailItem/DetailItem';
import DetailList from './DetailList/DetailList';
import FamilyLogo from 'libs/shared/assets/assets/rocketDetails/family.svg';
import SpecificationsLogo 
	from 'libs/shared/assets/assets/rocketDetails/specifications.svg';
import PayloadLogo from 'libs/shared/assets/assets/rocketDetails/payload.svg';
import { DetailListItemProps } 
	from './DetailList/DetailListItem/DetailListItem.types';

const StyledStack = styled(Stack)({
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
});
const DetailsWrapper = styled(Stack)(({ theme }) => ({
	flexDirection: 'column',
	width: '100%',
	justifyContent: 'space-around',
	alignItems: 'flex-start',
	[theme.breakpoints.down('sm')]: {
		alignItems: 'center'
	}
}));

export const RocketSection = () => {
  
  
	const { id } = useParams();
	const { data } = useGetRocketQuery(`${id}`);
  

	const familyDetails: Array<DetailListItemProps> = [
		{
			title: 'Name',
			value: data?.name??'-'
		},
		{
			title: 'Family',
			value: data?.family??'-'
		},
		{
			title: 'Variant',
			value: data?.variant ? data?.variant : '-'
		},
		{
			title: 'Full name',
			value: data?.full_name??'-'
		},
		{
			title: 'Alias',
			value: data?.alias ? data?.alias : '-'
		},
	];
	const specificationsDetails: Array<DetailListItemProps> = [
		{
			title: 'Minimum Stage',
			value: data?.min_stage??'-'
		},
		{
			title: 'Max Stage',
			value: data?.max_stage??'-'
		},
		{
			title: 'Length',
			value: data?.length??'-'
		},
		{
			title: 'Diameter',
			value: data?.diameter??'-'
		},
		{
			title: 'Fairing Diameter',
			value: '5.2 m'
		},
		{
			title: 'Launch Mass',
			value: data?.launch_mass??'-'
		},
		{
			title: 'Thrust',
			value: data?.to_thrust??'-'
		},
		{
			title: 'Apogee (Sub-Orbital)',
			value: data?.apogee??'-'
		},
	];
	const payloadDetails: Array<DetailListItemProps> = [
		{
			title: 'Launch Cost',
			value: '-'
		},
		{
			title: 'Low Earth Orbit',
			value: '-'
		},
		{
			title: 'Geostationary Transfer Orbit',
			value: '-'
		},
		{
			title: 'Direct Geostationary',
			value: '-'
		},
		{
			title: 'Sun-Synchronous Capacity',
			value: '-'
		},
	];

	return (
		<StyledStack>
			<DetailsWrapper  direction={{xs: 'column', sm: 'row',}}>
				<DetailItem logo={FamilyLogo} title={'Family'}>
					<DetailList details={familyDetails}/>
				</DetailItem>
				<DetailItem logo={SpecificationsLogo} title={'Specifications'}>
					<DetailList details={specificationsDetails}/>
				</DetailItem>
				<DetailItem logo={PayloadLogo} title={'Payload Capacity'}>
					<DetailList details={payloadDetails}/>
				</DetailItem>
			</DetailsWrapper>
		</StyledStack>
	);
};

export default RocketSection;
