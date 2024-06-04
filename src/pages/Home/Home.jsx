import React from 'react';
//styles
import styles from '../../assets/styles/landing/landing.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
//colorpallete
import colorPallete from '../../assets/theme/colorPallete.json';
//images
import Logo from '../../components/common/logo';
import Floors from '../../assets/images/floors.svg';
import FlowerType1 from '../../assets/images/flower_type_1.svg';
import TurnRight from '../../assets/images/turn_right.svg';
import Image1 from '../../assets/images/image_11.jpg';
import Image2 from '../../assets/images/image_9.jpg';
import Image3 from '../../assets/images/image_17.jpg';
import Image4 from '../../assets/images/image_12.jpg';
import Image5 from '../../assets/images/image_3.jpg';
import Image6 from '../../assets/images/image_6.jpg';
import Image7 from '../../assets/images/image_5.jpg';
import Image8 from '../../assets/images/image_7.jpg';
import Image9 from '../../assets/images/image_8.jpg';
import Image10 from '../../assets/images/image_2.jpg';
import Image11 from '../../assets/images/image_16.jpg';
//components
import BorderedContainer from '../../components/containers/borderedContainer';
import Card from '../../components/containers/card';
import BookButton from '../../components/buttons/BookButton';
import {
	CompanyOffer,
	CoursesOffer,
	DrinkOffer,
} from '../../assets/content/home/offerCards';

//content
import cardContent from '../../assets/content/home/cardContent';
import restaurantHours from '../../assets/content/common/restaurantHours';
import ImageGrid from '../../components/containers/imageGrid';

let Home = () => {
	return (
		<div className={styles['page-wrapper']}>
			<div className={styles['landing']}>
				<div className={styles['landing-inner-wrapper']}>
					<Logo className={imageStyles['landing-logo']} />
					<h1 className={fontStyles['header-1']} style={{ color: 'white' }}>
						Steakhouse - CocktailBar - FestVåning
					</h1>
				</div>
			</div>

			<div className={styles['section2']}>
				<div className={styles['section2-inner-wrapper']}>
					<div
						style={{
							color: '#fff',
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
							textShadow: '0px 0px 4px #000',
						}}>
						<p className={fontStyles['header-1']} style={{ color: '#fff' }}>
							Välkomna
						</p>
						<br />
						<p
							className={fontStyles['paragraph-1']}
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '0.5rem',
								padding: '0 5rem 0',
							}}>
							<span>
								Emils GastroBar & Restaurant erbjuder en varmt välkomnande plats
								för små och stora sällskap.
							</span>
							<br />
							<span>
								En två våningars topprenoverad restaurang med 120 sittplatser.
							</span>
							<br />
							<span>
								Emils erbjuder både smårätter, mellanrätter och huvudrätter samt
								goda cocktails, brett vinutbud och söndagsöppet.
							</span>
							<br />
						</p>
					</div>

					<BorderedContainer
						borderColor={colorPallete['brand-color']}
						style={{ color: 'white' }}>
						{Object.keys(cardContent).map((v) => {
							let imagePath = cardContent[v]['image-path'];
							let text = cardContent[v]['text'];

							return (
								<Card key={v} variant={'primary'} text={text}>
									<img
										title="restaurant emil feature illustration"
										src={imagePath}
										alt="restaurant emil feature illustration"
										className={imageStyles['svg-illustrations']}
										loading="lazy"
										width="80px"
										height="80px"
									/>
								</Card>
							);
						})}
					</BorderedContainer>
				</div>
			</div>

			<div className={styles['section3']}>
				<p className={fontStyles['header-1']} style={{ color: 'white' }}>
					Våra Special Erbjudanden
				</p>
				<div className={styles['section3-inner-wrapper']}>
					<div className={styles['offer-card-wrapper']}>
						<CoursesOffer />
						<DrinkOffer />
						<CompanyOffer />
					</div>
					<BookButton text={'boka nu'} href={'/boka-nu'} />
				</div>
			</div>

			<div className={styles['section4']}>
				<div className={styles['section4-left-wrapper']}>
					<div className={styles['location-wrapper']}>
						<iframe
							title="restaurant emils location on google maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.6606465790294!2d18.064717677381353!3d59.33861931027693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d76efa0f8c1%3A0x9601510817579c3c!2sRestaurant%20Emils!5e0!3m2!1sen!2sse!4v1717438349379!5m2!1sen!2sse"
							className={styles['location-iframe']}
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '100%',
							}}>
							<p>
								<span className={fontStyles['header-2']}>
									RegeringsGatan 88
								</span>
								<br />
								<span className={fontStyles['paragraph-1']}>
									111 39 Stockholm
								</span>
							</p>
							<a
								href="https://maps.app.goo.gl/mL5jagcTFC414dTf7"
								target="_blank"
								rel="noreferrer"
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}>
								<img
									title="google maps icon for navigation to restaurant emils"
									src={TurnRight}
									alt="google maps icon for navigation to restaurant emils"
									className={imageStyles['svgs']}
									loading="lazy"
									width="40px"
									height="40px"
								/>
								<span
									className={fontStyles['paragraph-1']}
									style={{ color: '#A8C7FA' }}>
									Navigera
								</span>
							</a>
						</div>
					</div>
					<div className={styles['restaurant-hours-wrapper']}>
						<span className={fontStyles['header-1']}>Öppettider</span>
						{Object.keys(restaurantHours).map((v) => {
							let startTime = restaurantHours[v]['start'];
							let endTime = restaurantHours[v]['end'];
							let closed = restaurantHours[v]['closed'];

							return (
								<div
									key={v}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										width: '70%',
										borderBottom: '1px solid #ffffff8f',

										padding: '0.5rem 1rem',
									}}>
									<span className={fontStyles['paragraph-1']}>{v}</span>
									<span className={fontStyles['paragraph-1']}>
										{closed ? 'Closed' : `${startTime} - ${endTime}`}
									</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles['section4-right-wrapper']}>
					<ImageGrid
						images={[
							Image1,
							Image2,
							Image3,
							Image4,
							Image10,
							Image11,
							Image5,
							Image7,
							Image8,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
