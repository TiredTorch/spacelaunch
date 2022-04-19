import { ListItem, Stack, styled, Typography } from "@mui/material";
import Button from "../../common/button/button";

/* eslint-disable-next-line */
export interface LaunchContentProps {}

const StyledStack = styled(Stack)({
  margin: 'auto',
  width: '60vw'
})
const StyledListItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const StyledTypography = styled(Typography)({
  textAlign: 'center'
})

export function LaunchContent(props: LaunchContentProps) {
  return (
    <StyledStack spacing='30px'>
      <StyledListItem>
        <StyledTypography variant="h1">
          Upcoming Spaceflight Launches
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography variant="h5">
          View all launches available - including launches from the past and utilize powerful search filters.
        </StyledTypography>
      </StyledListItem>
    </StyledStack>
  );
}

export default LaunchContent;
