import React, { Fragment, useRef } from 'react';
import { useState, useEffect } from 'react';
//styles
import styles from '../../assets/styles/landing/landing.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
import cardStyles from '../../assets/styles/common/cards.module.css';
import buttonStyles from '../../assets/styles/common/buttons.module.css';
import containerStyles from '../../assets/styles/common/containers.module.css';
//colorpallete
import colorPallete from '../../assets/theme/colorPallete.json';
//images
import Logo from '../../components/common/logo';
import Floors from '../../assets/images/floors.svg';
import FlowerType1 from '../../assets/images/flower_type_1.svg';
import TurnRight from '../../assets/images/turn_right.svg';
import Image1 from '../../assets/images/image_11.webp';
import Image2 from '../../assets/images/image_9.webp';
import Image3 from '../../assets/images/image_17.webp';
import Image4 from '../../assets/images/image_12.webp';
import Image5 from '../../assets/images/image_3.webp';
import Image6 from '../../assets/images/image_6.webp';
import Image7 from '../../assets/images/image_5.webp';
import Image8 from '../../assets/images/image_7.webp';
import Image9 from '../../assets/images/image_8.webp';
import Image10 from '../../assets/images/image_2.webp';
import Image11 from '../../assets/images/image_16.webp';
//components
import BorderedContainer from '../../components/containers/borderedContainer';
import Card from '../../components/containers/card';
import BookButton from '../../components/buttons/BookButton';
import coursesOffers from '../../assets/content/common/eventOffers.json';
import ScrollIntoView, { ScrollInto } from 'react-scroll-into-view';

//content
import cardContent from '../../assets/content/home/cardContent';
import restaurantHours from '../../assets/content/common/restaurantHours';
import ImageGrid from '../../components/containers/imageGrid';
import { Link } from 'react-router-dom';

let Home = () => {
	const handleClick = (e) => {
		if (!e.composedPath().includes(activeCard.current)) {
			setIsActiveOfferCard('none');
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleClick);
		if (activeCard.current) {
			activeCard.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
		return () => document.body.removeEventListener('click', handleClick);
	});

	let [isActiveOfferCard, setIsActiveOfferCard] = useState('none');
	let activeCard = useRef(null);

	return (
		<div className={styles['page-wrapper']}>
			<div className={styles['landing']}>
				<div className={styles['landing-inner-wrapper']}>
					<Logo className={imageStyles['landing-logo']} />
					<h1 className={fontStyles['header-1']} style={{ color: 'white' }}>
						Steakhouse - Seafood - Event
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
							Welcome to <br /> Emil&apos;s Steakhouse - Seafood - Event
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
							<span style={{ width: '50svw' }}>
								The perfect place for memorable events, birthday celebrations,
								corporate events, kickoffs, staff parties, or afterwork in the
								heart of the city&apos;s pulse.
							</span>
							<br />
							<span style={{ width: '50svw' }}>
								We offer everything from grilled dishes and seafood to small
								plates, delicious cocktails, and a wide selection of wines.
							</span>
							<br />
							<span style={{ width: '50svw' }}>
								We create outstanding experiences for both small and large
								groups and offer an elegant environment for every occasion.
								Whether it&apos;s a bachelor party, bachelorette party, or
								birthday celebration, we guarantee a unique and unforgettable
								experience for all our guests.
							</span>
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
					Today We Offer
				</p>
				<div className={styles['section3-inner-wrapper']}>
					<div className={styles['offer-card-wrapper']}>
						{Object.keys(coursesOffers).map((v) => {
							let name = coursesOffers[v]['main'];
							let drink = coursesOffers[v]['drink'];
							let amountOfPeople = coursesOffers[v]['amount-of-people'];
							let description = coursesOffers[v]['description'];
							let price = coursesOffers[v]['price'];
							let imagePath = coursesOffers[v]['image-path'];

							return (
								<div
									key={v}
									className={
										cardStyles['offer-card'] +
										' ' +
										(isActiveOfferCard === v ? styles['active'] : '') +
										(isActiveOfferCard !== 'none' && isActiveOfferCard !== v
											? styles['inactive']
											: '') +
										' ' +
										(isActiveOfferCard === v
											? ''
											: cardStyles['offer-card-hover'])
									}
									ref={isActiveOfferCard === v ? activeCard : null}
									onClick={() => {
										if (isActiveOfferCard === v) return;
										setIsActiveOfferCard(v);
									}}>
									<img
										title="course offer at restaurant emils"
										src={imagePath}
										alt="course offer at restaurant emils"
										width={'100%'}
										height={'100%'}
										loading="lazy"
										style={{
											filter:
												isActiveOfferCard === v
													? 'brightness(0.2)'
													: 'brightness(0.5)',
										}}
									/>
									{/* active card */}
									{isActiveOfferCard === v && (
										<div
											className={containerStyles['text-container']}
											style={{
												display: 'flex',
												flexDirection: 'column',
												height: '100%',
												textAlign: 'center',
												gap: '1rem',
												marginTop: '5rem',
												position: 'relative',
											}}>
											<span className={fontStyles['card-title-active']}>
												{name}
											</span>
											<br />
											<span className={fontStyles['card-description']}>
												{description}
											</span>
											<br />
											<span className={fontStyles['card-price']}>{price}</span>
											<br />

											{/* card's two buttons (close menu) + (see our menu) */}
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-around',
													position: 'absolute',
													width: '100%',
													bottom: '5rem',
												}}>
												<button
													className={buttonStyles['outlined-text']}
													style={{ color: '#fff' }}
													onClick={() => {
														setIsActiveOfferCard('none');
													}}>
													close menu
												</button>
												<button
													className={buttonStyles['outlined-text']}
													style={{ color: '#fff' }}>
													<Link to="/menu" style={{ color: '#fff' }}>
														see our menu
													</Link>
												</button>
											</div>
										</div>
									)}
									{/* inactive card */}
									{isActiveOfferCard !== v && (
										<span className={fontStyles['card-title']}>{name}</span>
									)}
								</div>
							);
						})}
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
