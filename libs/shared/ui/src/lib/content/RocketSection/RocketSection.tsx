import { Stack, styled } from '@mui/material';
import { 
	useGetRocketQuery 
} from '@spacelaunch/redux/store';
import { useParams } from 'react-router';
import DetailItem from './DetailItem/DetailItem';
import DetailList from './DetailList/DetailList';
import { assets } from '@spacelaunch/shared/assets';
import { DetailListItemProps } 
	from './DetailList/DetailListItem/DetailListItem.types';
import Loading from '../../common/Loading/Loading';

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
	const { data, isLoading } = useGetRocketQuery(`${id}`);
  

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
		isLoading ?
			<Loading/> :
			<StyledStack>
				<DetailsWrapper  direction={{xs: 'column', sm: 'row',}}>
					<DetailItem logo={assets.FamilyLogo} title={'Family'}>
						<DetailList details={familyDetails}/>
					</DetailItem>
					<DetailItem 
						logo={assets.SpecificationsLogo} 
						title={'Specifications'}
					>
						<DetailList details={specificationsDetails}/>
					</DetailItem>
					<DetailItem 
						logo={assets.PayloadLogo} 
						title={'Payload Capacity'}
					>
						<DetailList details={payloadDetails}/>
					</DetailItem>
				</DetailsWrapper>
			</StyledStack>
	);
};

export default RocketSection;
