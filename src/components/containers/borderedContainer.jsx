//styles
import containerStyles from '../../assets/styles/common/containers.module.css';

export default function BorderedContainer(props) {
	const defaultColor = '#000';

	let borderColor = props.borderColor || defaultColor;
	let extraStyle = props.style || {};

	return (
		<div className={containerStyles['bordered-container']}>
			{props.children}
		</div>
	);
}
