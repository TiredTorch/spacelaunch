import { AppBar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { assets } from '@spacelaunch/shared/assets';
import { HeaderProps } from './Header.types';

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

const LogoWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',
	top: '50px',
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
}));

/**
 * 
 * @param {boolean} props.hasLinkToHome is header has link to home  
 * @returns 
 */
export const Header = (props: HeaderProps) => {
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
				<Logo logoSize={'md'} src={assets.Logo}/>
			</LogoWrapper>
		</StyledHeader>
	);
};

export default Header;
