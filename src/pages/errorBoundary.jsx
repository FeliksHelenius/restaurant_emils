import { useEffect } from 'react';

export default function ErrorBoundary(props) {
	useEffect(() => {
		console.log(props);
	}, []);

	return (
		<div>
			<h1>Something went wrong.</h1>
		</div>
	);
}
