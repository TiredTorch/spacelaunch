import { Box, styled } from "@mui/material";

/* eslint-disable-next-line */
export interface OverlayProps {
  children: React.ReactNode
}

const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '100vw',
  height: '1080px',
  padding: '300px 18vw',
  background: 'linear-gradient(180deg, #302B63 21.88%, rgba(24, 27, 72, 0.71) 90.1%)',
}))
const StyledImgContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '99vw',
  height: '1080px',
  left: '0px',
  top: '0px',
  overflowX: 'hidden',
  background: 'linear-gradient(0.48deg, #181B48 5.64%, rgba(24, 27, 72, 0) 92.32%), url(https://www.esa.int/extension/pillars/design/pillars/images/nebula.jpg)',
}))

export function Overlay(props: OverlayProps) {
  return (
    <>
      <StyledImgContainer/>
      <StyledContainer>
        {props.children}
      </StyledContainer>
    </>
  );
}

export default Overlay;
