import logo from '../../assets/images/logo.png';

export default function Logo(props) {
	let className = props.className || '';

	return (
		<img
			title="restaurant emils logo"
			src={logo}
			alt="restaurant emils logo"
			className={className}
			width="64px"
			height="104px"
		/>
	);
}
