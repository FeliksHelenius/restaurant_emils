import { createBrowserRouter } from 'react-router-dom';
//pages
import ErrorBoundary from '../pages/errorBoundary';
import App from '../App';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Gallery from '../pages/Gallery/Gallery';
import Event from '../pages/Events/Events';

const Router = createBrowserRouter([
	{
		path: '/restaurant_emils',
		element: <App />,
		ErrorBoundary: ErrorBoundary,
		children: [
			{
				path: '/restaurant_emils',
				element: <Home />,
			},
			{
				path: '/restaurant_emils/menu',
				element: <Menu />,
			},
			{
				path: '/restaurant_emils/gallery',
				element: <Gallery />,
			},
			{
				path: '/restaurant_emils/events',
				element: <Event />,
			},
		],
	},
]);

export default Router;
