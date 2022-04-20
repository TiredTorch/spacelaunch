import { Box, styled, Typography } from "@mui/material";
import LaunchListItem from "./launch-list-item/launch-list-item";

/* eslint-disable-next-line */
export interface LaunchesListProps {}

const StyledBox = styled(Box)({
  marginTop: '20px',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
})

export function LaunchesList(props: LaunchesListProps) {
  return (
    <StyledBox>
      <Typography variant="h3" align="center" width={'100%'}>
        Spaceflight Launches
      </Typography>
      <LaunchListItem 
        url={"/launch/1"} 
        dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
        launchTitle={"Long March 3B/E | Gaofen 14"}
      />
      <LaunchListItem 
        url={"/launch/1"} 
        dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
        launchTitle={"Long March 3B/E | Gaofen 14"}
      />
      <LaunchListItem 
        url={"/launch/1"} 
        dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
        launchTitle={"Long March 3B/E | Gaofen 14"}
      />
      <LaunchListItem 
        url={"/launch/1"} 
        dataTitle={"Dec. 6, 2020, 6:17 p.m."} 
        launchTitle={"Long March 3B/E | Gaofen 14"}
      />
    </StyledBox>
  );
}

export default LaunchesList;
