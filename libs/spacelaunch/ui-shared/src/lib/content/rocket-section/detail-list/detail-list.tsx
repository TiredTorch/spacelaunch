import DetailListItem, { DetailListItemProps } from "./detail-list-item/detail-list-item";

export interface DetailListProps {
  details: Array<DetailListItemProps>
}

export function DetailList(props: DetailListProps) {
  return (
    <>
      {props.details.map((detail) => (
        <DetailListItem title={detail.title} value={detail.value}/>
      ))}
    </>
  );
}

export default DetailList;
