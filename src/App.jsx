import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';

let App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</>
	);
};

export default App;
