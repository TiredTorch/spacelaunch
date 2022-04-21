import { Stack, styled } from '@mui/material';
import { 
	useGetRocketQuery 
} from 'libs/spacelaunch/store-shared/src/lib/rocketpage/rocketpageApi';
import { useParams } from 'react-router';
import Button from '../../common/button/button';
import DetailItem from './detail-item/detail-item';
import DetailList from './detail-list/detail-list';
import { 
	DetailListItemProps 
} from './detail-list/detail-list-item/detail-list-item';

const StyledStack = styled(Stack)({
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
});
const SubtitleWrapper = styled(Stack)({
	width: '70%',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center'

});
const DetailsWrapper = styled(Stack)({
	width: '100%',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'flex-start'
});

export function RocketSection() {
  
  
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
			<SubtitleWrapper>
				<Button userSize={'sm'} title={'ACTIVE'} url={''}/>
				<Button userSize={'sm'} title={'RE-USABLE'} url={''}/>
				<Button userSize={'sm'} title={'FALCON'} url={''}/>
			</SubtitleWrapper>
			<DetailsWrapper>
				<DetailItem logo={'https://www.freepnglogos.com/uploads/rocket-png/rocket-icon-download-png-and-vector-36.png'} title={'Family'}>
					<DetailList details={familyDetails}/>
				</DetailItem>
				<DetailItem logo={'https://cdn.pixabay.com/photo/2014/04/03/00/40/document-309065_960_720.png'} title={'Specifications'}>
					<DetailList details={specificationsDetails}/>
				</DetailItem>
				<DetailItem logo={'https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami6-85-512.png'} title={'Payload Capacity'}>
					<DetailList details={payloadDetails}/>
				</DetailItem>
			</DetailsWrapper>
		</StyledStack>
	);
}

export default RocketSection;
