import { Typography } from '@mui/material';
import { InfoStringProps } from './InfoString.types';

export const InfoString = (props: InfoStringProps) => {
	return (
		<Typography variant="h2" fontWeight={400}>
			<b>{props.title}: </b>{props.info}
		</Typography>
	);
};

export default InfoString;
