import { ListItem, Stack, styled, Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface RocketContentProps {}

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

export function RocketContent(props: RocketContentProps) {
  return (
    <StyledStack spacing='10px'>
      <StyledListItem>
        <StyledTypography variant="h1">
          Falcon 9 Block 5
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography variant="h2" fontWeight={400}>
          SpaceX (SpX)
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography variant="h2">
          May 11, 2018
        </StyledTypography>
      </StyledListItem>
      <StyledListItem>
        <StyledTypography variant="h5">
        Falcon 9 is a two-stage rocket designed and manufactured 
        by SpaceX for the reliable and safe transport of satellites 
        and the Dragon spacecraft into orbit. The Block 5 variant is 
        the fifth major interval aimed at improving upon the ability 
        for rapid reusability.
        </StyledTypography>
      </StyledListItem>
    </StyledStack>
  );
}

export default RocketContent;
