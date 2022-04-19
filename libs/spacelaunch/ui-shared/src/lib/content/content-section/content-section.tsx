import { Stack, styled } from "@mui/material";

/* eslint-disable-next-line */
export interface ContentSectionProps {
  children: React.ReactNode
}

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '75vw',
  margin: 'auto',
  padding: '10%',
  backgroundColor: theme.palette.primary.light
}))

export function ContentSection(props: ContentSectionProps) {
  return (
    <StyledStack>
      {props.children}
    </StyledStack>
  );
}

export default ContentSection;
