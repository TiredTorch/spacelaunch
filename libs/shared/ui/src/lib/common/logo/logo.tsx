import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { LogoProps } from './Logo.types';

/**
 * 
 * @param props.logoSize size of logo image
 * @param props.src path to image for logo
 * @returns 
 */
export const Logo = (props: LogoProps) => {
	const [size, setSize] = useState({w: '50px', h: '50px'});

	useEffect(() => {
		switch (props.logoSize) {
		case 'sm':
			setSize({w: '50px', h: '50px'});
			break;
		case 'md':
			setSize({w: '100px', h: '100px'});
			break;
		default:
			break;
		}
  
	}, [props.logoSize]);
  

	return (
		<Box
			sx={{
				width: size.w,
				height: size.h,
			}}
			component='img'
			alt="logo"
			src={props.src}
		/>
	);
};

export default Logo;
