import { Box, styled } from "@mui/material";

/* eslint-disable-next-line */
export interface OverlayProps {
  children: React.ReactNode
  childrenAlignType: 'left' | 'center'
}

const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '100vw',
  height: '1080px',
  padding: '330px 25vw',
  background: 'linear-gradient(180deg, #302B63 21.88%, rgba(24, 27, 72, 0.71) 90.1%)'
}))
const StyledImgContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '99vw',
  height: '1126px',
  left: '0px',
  top: '0px',
  overflowX: 'hidden',
  background: 'linear-gradient(359.26deg, #181B48 -15.64%, rgba(24, 27, 72, 0) 48.81%), url(https://www.esa.int/extension/pillars/design/pillars/images/nebula.jpg)',
}))

export function Overlay(props: OverlayProps) {
  return (
    <>
      <StyledImgContainer
        border={0}
      />
      <StyledContainer>
        {props.children}
      </StyledContainer>
    </>
  );
}

export default Overlay;
