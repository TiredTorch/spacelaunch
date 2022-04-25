import { AppBar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../common/logo/logo';
import LogoImg from '../../../../../shared/assets/assets/logo/Logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {
  hasLinkToHome: boolean
}

const StyledHeader = styled(AppBar)(({ theme }) => ({
	zIndex: '1251',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	height: '100px',
	flexDirection: 'row',
	flexWrap: 'wrap',
  
	display: 'flex',
	alignItems: 'center',

	padding: '0 20%',

	[theme.breakpoints.down('md')]: {
		alignItems: 'center',
		padding: '0 5%',
	}
}));

const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,

	[theme.breakpoints.down('md')]: {
		textAlign: 'center',
	}
}));

const LogoWrapper = styled(Box)({
	position: 'relative',
	top: '50px',
});

export function Header(props: HeaderProps) {

  
	return (
		<StyledHeader sx={{
			justifyContent: props.hasLinkToHome ? 'space-between' : 'center'
		}}>
      
			{props.hasLinkToHome ? (
				<Link to="/" style={{ textDecoration: 'none'}}>
					<StyledHeaderTitle variant="h2">
              ← Back to Home
					</StyledHeaderTitle>
				</Link>
          
			) : ''
			}
			<LogoWrapper>
				<Logo logoSize={'md'} src={LogoImg}/>
			</LogoWrapper>
		</StyledHeader>
	);
}

export default Header;
