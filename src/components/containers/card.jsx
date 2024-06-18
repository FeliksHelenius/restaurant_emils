import fontStyles from '../../assets/styles/common/fonts.module.css';
import cardStyles from '../../assets/styles/common/cards.module.css';

//images
import defaultImage from '../../assets/images/3_course_offer.jpg';

export default function Card(props) {
	let defaultVariant = 'primary';

	let variant = props.variant || defaultVariant;
	let extraStyle = props.style || {};
	let text = props.text || ['exampletext'];
	let image = props.image || defaultImage;
	let hoverCard = props.hoverCard || false;

	if (variant == 'primary')
		return (
			<PrimaryCard style={{ extraStyle }} text={text} hoverCard={hoverCard}>
				{props.children}
			</PrimaryCard>
		);

	if (variant == 'offer')
		return (
			<OfferCard
				image={props.image}
				style={{ extraStyle }}
				hoverCard={hoverCard}>
				{props.children}
			</OfferCard>
		);
}

function PrimaryCard(props) {
	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				alignItems: 'center',
				...props.style,
			}}>
			{props.children}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.25rem',
				}}>
				{props['text'].map((v) => {
					return (
						<span key={v} className={fontStyles['paragraph-special']}>
							{v}
						</span>
					);
				})}
			</div>
		</div>
	);
}

function OfferCard(props) {
	let extraStyle = props.style.extraStyle || {};
	let hoverCard = props.hoverCard || false;

	return (
		<div
			className={
				cardStyles['offer-card'] +
				' ' +
				(hoverCard ? cardStyles['offer-card-hover'] : '')
			}
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
				url(${props.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',

				...extraStyle,
			}}>
			{props.children}
		</div>
	);
}
