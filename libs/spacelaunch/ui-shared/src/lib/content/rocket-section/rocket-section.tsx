import { ListItem, Stack, styled } from "@mui/material";
import Button from "../../common/button/button";
import SubtitleBox from "../../common/subtitle-box/subtitle-box";
import DetailItem from "./detail-item/detail-item";
import DetailList from "./detail-list/detail-list";
import { DetailListItemProps } from "./detail-list/detail-list-item/detail-list-item";

/* eslint-disable-next-line */
export interface RocketSectionProps {}

const StyledStack = styled(Stack)({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
const SubtitleWrapper = styled(Stack)({
  width: '70%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'

})
const DetailsWrapper = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start'
})

export function RocketSection(props: RocketSectionProps) {

  const familyDetails: Array<DetailListItemProps> = [
    {
      title: 'Name',
      value: 'Falcon 9 Block 5'
    },
    {
      title: 'Family',
      value: 'Falcon'
    },
    {
      title: 'Variant',
      value: 'Block 5'
    },
    {
      title: 'Full name',
      value: 'Falcon 9 Block 5'
    },
    {
      title: 'Alias',
      value: '-'
    },
  ]
  const specificationsDetails: Array<DetailListItemProps> = [
    {
      title: 'Minimum Stage',
      value: '1'
    },
    {
      title: 'Max Stage',
      value: '2'
    },
    {
      title: 'Length',
      value: '70.0 m'
    },
    {
      title: 'Diameter',
      value: '3.65 m'
    },
    {
      title: 'Fairing Diameter',
      value: '5.2 m'
    },
    {
      title: 'Launch Mass',
      value: '549 T'
    },
    {
      title: 'Thrust',
      value: '7607 kN'
    },
    {
      title: 'Apogee (Sub-Orbital)',
      value: '200 km'
    },
  ]
  const payloadDetails: Array<DetailListItemProps> = [
    {
      title: 'Launch Cost',
      value: '$52,000,000'
    },
    {
      title: 'Low Earth Orbit',
      value: '22800 kg'
    },
    {
      title: 'Geostationary Transfer Orbit',
      value: '8300 kg'
    },
    {
      title: 'Direct Geostationary',
      value: '-'
    },
    {
      title: 'Sun-Synchronous Capacity',
      value: '-'
    },
  ]

  return (
    <StyledStack>
      <SubtitleWrapper>
        <Button userSize={"sm"} title={"ACTIVE"} url={""}/>
        <Button userSize={"sm"} title={"RE-USABLE"} url={""}/>
        <Button userSize={"sm"} title={"FALCON"} url={""}/>
      </SubtitleWrapper>
      <DetailsWrapper>
        <DetailItem logo={"https://www.freepnglogos.com/uploads/rocket-png/rocket-icon-download-png-and-vector-36.png"} title={"Family"}>
          <DetailList details={familyDetails}/>
        </DetailItem>
        <DetailItem logo={"https://cdn.pixabay.com/photo/2014/04/03/00/40/document-309065_960_720.png"} title={"Specifications"}>
          <DetailList details={specificationsDetails}/>
        </DetailItem>
        <DetailItem logo={"https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami6-85-512.png"} title={"Payload Capacity"}>
          <DetailList details={payloadDetails}/>
        </DetailItem>
      </DetailsWrapper>
    </StyledStack>
  );
}

export default RocketSection;
