//components
import { Link } from 'react-router-dom';
//styles
import fontStyles from '../../assets/styles/common/fonts.module.css';
import buttonStyles from '../../assets/styles/common/buttons.module.css';

export default function BookButton(props) {
	const text = props.text || 'lorem';
	return (
		<Link to={props.href} className={buttonStyles['outlined-text']}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			{text}
		</Link>
	);
}
