import { Stack, styled } from "@mui/material";

/* eslint-disable-next-line */
export interface LaunchSectionProps {}

const StyledStack = styled(Stack)({
  
})

export function LaunchSection(props: LaunchSectionProps) {
  return (
    <StyledStack>
      <div className="video">fff</div>
      <StyledStack>
        desc
      </StyledStack>
      <div className="map">dsfsd</div>
    </StyledStack>
  );
}

export default LaunchSection;
