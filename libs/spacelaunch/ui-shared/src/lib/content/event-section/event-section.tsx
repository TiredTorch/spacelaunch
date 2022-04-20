import { Box, Stack, styled, Typography } from "@mui/material";
import InfoString from "../../common/info-string/info-string";
import SubtitleBox from "../../common/subtitle-box/subtitle-box";
import VideoPlayer from "../../common/video-player/video-player";
import EventList from "../home-section/event-list/event-list";

/* eslint-disable-next-line */
export interface EventSectionProps {}

const StyledStack = styled(Stack)({
  justifyContent: 'space-around'
})

const StyledInformationWrapper = styled(Stack)({
  margin: '60px auto',
  flexDirection: 'row',
  justifyContent: 'space-around'
})

export function EventSection(props: EventSectionProps) {
  const img = 'https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png'

  return (
    <StyledStack>
      <VideoPlayer videoSrc={'https://www.youtube.com/embed/wxiT4CkO7CQ'}/>
      <StyledInformationWrapper>
        <Box component={'img'} 
          src={img}
          sx={{
            height: '300px',
            width: '50%'
          }}
        />
        <StyledStack sx={{width: '40%'}}>
          <Typography variant="h2">
            Long March 3B/E | Gaofen 14
          </Typography>
          <SubtitleBox title={"Dec. 6, 2020, 6:17 p.m."}/>
          <InfoString title={"Destination"} info={"Low Earth Orbit"}/>
          <InfoString title={"Mission"} info={"Resupply"}/>
          <Typography variant="h5">
          SpaceX will launch the first cargo variant of its Dragon 2 spacecraft on their 21st commercial resupply services mission to the International Space Station. The flight will be conducted under the second Commercial Resupply Services contract with NASA. Dragon will be filled with supplies
          </Typography>
        </StyledStack>
      </StyledInformationWrapper>
      <EventList/>
    </StyledStack>
  );
}

export default EventSection;
