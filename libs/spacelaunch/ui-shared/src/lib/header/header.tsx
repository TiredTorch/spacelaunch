import { AppBar, Typography } from "@mui/material";
import { styled } from "@mui/material";

/* eslint-disable-next-line */
export interface HeaderProps {
  hasLinkToHome: boolean
}

const StyledHeader = styled(AppBar)(({ theme }) => ({
  zIndex: '1251',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  height: '100px',
  
  display: 'flex',
  justifyContent: 'center',

  paddingLeft: '20%'
}))

const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '26px',
}))

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      
        {props.hasLinkToHome ? (
          <StyledHeaderTitle>
            ← Back to Home
          </StyledHeaderTitle>
        ) : 
          ''
        }
    </StyledHeader>
  );
}

export default Header;
