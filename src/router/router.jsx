import { createBrowserRouter } from 'react-router-dom';
//pages
import ErrorBoundary from '../pages/errorBoundary';
import App from '../App';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Gallery from '../pages/Gallery/Gallery';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		ErrorBoundary: ErrorBoundary,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
]);

export default Router;
