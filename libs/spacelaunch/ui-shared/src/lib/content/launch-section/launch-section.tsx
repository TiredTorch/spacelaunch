import { CardMedia, ListItem, Stack, styled, Typography } from "@mui/material";
import Button from "../../common/button/button";
import SubtitleBox from "../../common/subtitle-box/subtitle-box";
import InfoString from "./info-string/info-string";

/* eslint-disable-next-line */
export interface LaunchSectionProps {}

const StyledStack = styled(Stack)({
  margin: '30px 0',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})
const SubtitleWrapper = styled(Stack)({
  width: '70%',
  padding: '0',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly'
})
const SubtitleItem = styled(ListItem)({
  width: '33%',
  margin: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export function LaunchSection(props: LaunchSectionProps) {
  return (
    <StyledStack>
      <CardMedia 
        component={'iframe'} 
        src='https://www.youtube.com/embed/wxiT4CkO7CQ'
        loading="lazy"
        sx={{
          margin: 'auto',
          width: '1180px',
          height: '711px',
          border: 'none'
        }}
      />
      <StyledStack>
        <Typography variant="h3">
          Overview
        </Typography>
        <InfoString title={"Destination"} info={"Low Earth Orbit"}/>
        <InfoString title={"Mission"} info={"Resupply"}/>
        <SubtitleWrapper>
          <SubtitleItem>
            <SubtitleBox title={"Text"}/>
          </SubtitleItem>
          <SubtitleItem>
            <SubtitleBox title={"Text"}/>
          </SubtitleItem>
          <SubtitleItem>
            <SubtitleBox title={"Text"}/>
          </SubtitleItem>
          <SubtitleItem>
            <SubtitleBox title={"Text"}/>
          </SubtitleItem>
          <Typography variant="h5" align="center" marginTop={'20px'}>
            SpaceX will launch the first cargo variant of its Dragon 2 spacecraft on their 21st commercial resupply services mission to the International Space Station. The flight will be conducted under the second Commercial Resupply Services contract with NASA. Dragon will be filled with supplies and payloads, including critical materials to directly support more than 250 science and research investigations that occur onboard the orbiting laboratory.
          </Typography>
        </SubtitleWrapper>
      </StyledStack>
      <StyledStack>
        <Typography variant="h3">
          Falcon 9 Block 5
        </Typography>
        <InfoString title={"Family"} info={"Falcon"}/>
        <InfoString title={"Configuration"} info={"Block 5"}/>
        <Typography variant="h5" align="center" margin={'20px 0'} padding={'0 200px'}>
          Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability.
        </Typography>
        <Button userSize={"md"} title={"See Rocket Details"} url={"/rocket/1"}/>
      </StyledStack>
      <CardMedia
        component={'iframe'} 
        src="https://maps.google.com/maps?q='28.56194122','-80.57735736'&hl=es&z=14&amp;output=embed" 
        loading="lazy"
        sx={{
          margin: '100px auto 0',
          width: '1180px',
          height: '492px',
          border: 'none'
        }}
      />
    </StyledStack>
  );
}

export default LaunchSection;
