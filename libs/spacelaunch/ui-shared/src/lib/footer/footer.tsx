import { Box, styled, Typography } from "@mui/material";
import Logo from "../common/logo/logo";

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '215px',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}))
const StyledCopyrights = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '17px',
}))

export function Footer(props: FooterProps) {
  return (
    <StyledBox>
      <Logo
        logoSize='sm'
        src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png"
      />
      <StyledCopyrights>
        © 2021 Copyright
      </StyledCopyrights>
    </StyledBox>
  );
}

export default Footer;
