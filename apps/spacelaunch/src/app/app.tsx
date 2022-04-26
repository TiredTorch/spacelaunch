import { useEffect } from 'react';
import AppRoutes from '../routes/AppRoutes/AppRoutes';

export const App = () => {

	const loadSWHandler = async() => {
		if(navigator.serviceWorker) {
			try {
				await navigator.serviceWorker.register(
					'/sw.js'
				);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('load', loadSWHandler);
	
		return () => {
			window.removeEventListener('load', loadSWHandler);
		};
	}, []);
	

	return (
		<AppRoutes/>
	);
};

export default App;
