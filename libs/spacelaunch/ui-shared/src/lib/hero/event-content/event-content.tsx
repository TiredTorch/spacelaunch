import { ListItem, Stack, styled, Typography } from "@mui/material";
import Button from "../../common/button/button";

/* eslint-disable-next-line */
export interface EventContentProps {}

const StyledStack = styled(Stack)({
  margin: 'auto',
  width: '40vw'
})
const StyledListItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const StyledTypography = styled(Typography)({
  textAlign: 'center',
})

export function EventContent(props: EventContentProps) {
  return (
    <StyledStack spacing='20px'>
      <StyledListItem>
        <StyledTypography variant="h1">
          CRS-21 Dragon Docking
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
      <Button userSize={"sm"} title={"Dec. 6, 2020, 6:17 p.m."}/>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography variant="h5">
          May 11, 2018
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <Button userSize={"md"} title={"Read On Site"}/>
      </StyledListItem>
    </StyledStack>
  );
}

export default EventContent;
