import logo from '../../assets/images/logo_color.png';

export default function LogoColored(props) {
	let className = props.className || '';
	return (
		<img
			title="restaurant emils logo"
			src={logo}
			alt="restaurant emils logo colored"
			className={className}
			width="64px"
			height="104px"
		/>
	);
}
