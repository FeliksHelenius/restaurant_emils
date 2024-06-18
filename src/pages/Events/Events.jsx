import styles from '../../assets/styles/events/events.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import buttonStyles from '../../assets/styles/common/buttons.module.css';

//images
// selling points
import versatileSpace from '../../assets/images/image_12.webp';
import deliciousFood from '../../assets/images/image_6.webp';
import professionalService from '../../assets/images/image_3.webp';
// menu highlights
import aLaCarteOptions from '../../assets/images/image_7.webp';
import drinkOptions from '../../assets/images/image_18.webp';
import customizableOptions from '../../assets/images/image_2.webp';

//components
import Card from '../../components/containers/card';
import OutlinedTextButton from '../../components/buttons/OutlinedTextButton';
import { Link } from 'react-router-dom';
import CarouselContainer from '../../components/containers/carouselContainer';

export default function Events() {
	const defaultSectionStyle = {
		display: 'flex',
		marginTop: '5rem',
		textAlign: 'center',
		flexDirection: 'column',
		gap: '5rem',
		alignItems: 'center',
	};

	return (
		<div className={styles['page-wrapper']}>
			<h1 className={fontStyles['header-1']} style={{ textAlign: 'center' }}>
				Book Your Event at Emil&apos;s Gastrobar & Restaurant
			</h1>
			<div className={styles['text-wrapper']}>
				<p className={fontStyles['paragraph-1']}>
					Looking to host an unforgettable event in the heart of Stockholm?
					Emil&apos;s GastroBar & Restaurant offers the perfect venue for both
					small and large gatherings. Located at Regeringsgatan 88, our
					two-story, fully renovated restaurant boasts 120 seats and provides a
					warm and welcoming atmosphere for all occasions.
				</p>
			</div>
			<div className={styles['default-section']}>
				<p className={fontStyles['header-2']}>Why Choose Emil&apos;s?</p>
				<div className={styles['selling-points-wrapper']}>
					{sellingPointCards.map((card) => {
						let title = card.title;
						let description = card.description;
						let image = card.image;

						return (
							<Card
								key={title}
								variant={'offer'}
								image={image}
								hoverCard={true}
								style={{
									textAlign: 'center',
									padding: '1rem',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
								}}>
								<p className={fontStyles['card-title']}>{title}</p>
								<p className={fontStyles['card-description-small']}>
									{description}
								</p>
							</Card>
						);
					})}
				</div>
				<div className={styles['card-mobile']}>
					<CarouselContainer cards={sellingPointCards} />
				</div>
			</div>

			<div
				className={styles['menu-highlights'] + ' ' + styles['default-section']}>
				<p className={fontStyles['header-2']}>Menu Highlights</p>
				<div className={styles['menu-highlights-wrapper']}>
					{menuHighlights.map((card) => {
						let title = card.title;
						let description = card.description;
						let image = card.image;

						return (
							<Card
								key={title}
								variant={'offer'}
								image={image}
								hoverCard={true}
								style={{
									textAlign: 'center',
									padding: '6rem 1rem',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
								}}>
								<p className={fontStyles['card-title']}>{title}</p>
								<p className={fontStyles['card-description-small']}>
									{description}
								</p>
							</Card>
						);
					})}
				</div>
				<div className={styles['card-mobile']}>
					<CarouselContainer cards={menuHighlights} />
				</div>
				<OutlinedTextButton
					text={'explore our menu'}
					href={'/restaurant_emils/menu'}
				/>
			</div>

			<div className={styles['default-section']}>
				<p className={fontStyles['header-2']}>Booking Information</p>
				<div className={styles['text-wrapper']}>
					<p className={fontStyles['paragraph-1']}>
						To book your event, simply email us at{' '}
						<a href="mailto:info@restaurantemils.se">info@restaurantemils.se</a>{' '}
						or book through our <Link to={''}>booking page</Link>. Our team will
						work with you to tailor every detail to your needs, ensuring a
						memorable experience for you and your guests.
					</p>
					<p className={fontStyles['paragraph-1']}>
						For more information, you can also call us at{' '}
						<a href="tel:+468880884">08-88 08 84</a>.
					</p>
					<p className={fontStyles['paragraph-1']}>
						Plan your next event with us and enjoy the best of what Stockholm
						has to offer in a vibrant and sophisticated setting. We look forward
						to hosting you at Emil&apos;s GastroBar & Restaurant!
					</p>
				</div>
			</div>
		</div>
	);
}

const sellingPointCards = [
	{
		title: 'Versatile Space',
		description:
			'Our spacious venue is ideal for a variety of events, from corporate meetings and product launches to private parties and family celebrations.',
		image: versatileSpace,
	},
	{
		title: 'Exquisite Cuisine',
		description:
			'Enjoy a diverse menu featuring small plates, main courses, and delicious cocktails. Our offerings include everything from classic dishes to innovative culinary creations.',
		image: deliciousFood,
	},
	{
		title: 'Professional Service',
		description:
			'Our dedicated and professional team is committed to ensuring your event runs smoothly and exceeds your expectations.',
		image: professionalService,
	},
];

const menuHighlights = [
	{
		title: 'À la Carte Options',
		description:
			'Choose from a selection of appetizers, main courses, and desserts that cater to all tastes.',
		image: aLaCarteOptions,
	},
	{
		title: 'Drink Options',
		description:
			'Our extensive drink menu includes a variety of wines, beers, and cocktails to complement your meal.',
		image: drinkOptions,
	},
	{
		title: 'Flexible Menu Options',
		description:
			'We offer flexible menu options to accommodate dietary preferences and special requests.',
		image: customizableOptions,
	},
];
