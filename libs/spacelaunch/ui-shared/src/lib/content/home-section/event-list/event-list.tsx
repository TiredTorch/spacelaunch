import { Button, Stack, styled, Typography } from "@mui/material";
import EventListItem from "./event-list-item/event-list-item";

/* eslint-disable-next-line */
export interface EventListProps {}

const StyledStackRow = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '0 0 20px 0'
})

const StyledStackColumn = styled(Stack)({
  flexDirection: 'column',
  justifyContent: 'space-around',
  margin: '0 0 60px 0'
})

const StyledArrowButton = styled(Button)({
  color: 'white',
  marginRight: '10px'
})

export function EventList(props: EventListProps) {
  return (
    <StyledStackColumn>
      <StyledStackRow>
        <Typography variant="h3">
          Recent Events
        </Typography>
        <StyledStackRow>
          <StyledArrowButton>
            <Typography variant="h3">
              ←
            </Typography>
          </StyledArrowButton>
          <StyledArrowButton>
            <Typography variant="h3">
              →
            </Typography>
          </StyledArrowButton>
        </StyledStackRow>
      </StyledStackRow>
      <StyledStackRow>
        <EventListItem 
          url={"/event/1"} 
          dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
          eventTitle={"Falcon 9 Block 5 | Dragon CRS-2 SpX-21"}
        />
        <EventListItem 
          url={"/event/1"} 
          dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
          eventTitle={"Falcon 9 Block 5 | Dragon CRS-2 SpX-21"}
        />
        <EventListItem 
          url={"/event/1"} 
          dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
          eventTitle={"Falcon 9 Block 5 | Dragon CRS-2 SpX-21"}
        />
      </StyledStackRow>
    </StyledStackColumn>
  );
}

export default EventList;
