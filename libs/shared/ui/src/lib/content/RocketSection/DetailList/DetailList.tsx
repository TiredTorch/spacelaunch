import DetailListItem	from './DetailListItem/DetailListItem';
import { DetailListProps } from './DetailList.types';

export const DetailList = (props: DetailListProps) => {
	return (
		<>
			{props.details.map((detail) => (
				<DetailListItem 
					key={`item ${detail.title}`}
					title={detail.title} 
					value={detail.value}
				/>
			))}
		</>
	);
};

export default DetailList;
