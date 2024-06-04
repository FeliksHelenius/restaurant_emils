import Card from '../../../components/containers/card';

//images
import CoursesOfferImage from '../../../assets/images/3_course_offer.jpg';
import DrinkOfferImage from '../../../assets/images/drink_offer.jpg';
import CompanyOfferImage from '../../../assets/images/company_offer.jpg';

//styles
import fontStyles from '../../../assets/styles/common/fonts.module.css';
import colorPallete from '../../../assets/theme/colorPallete.json';

const CoursesOffer = () => {
	return (
		<Card variant={'offer'} image={CoursesOfferImage}>
			<div
				style={{
					color: 'white',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					padding: '2rem 2rem 2rem',
					gap: '0.5rem',
				}}>
				<div>
					<span className={fontStyles['subheader-1']}>
						3-Rätters Erbjudande
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}>
					<span className={fontStyles['paragraph-1']}>
						Kombinera er egna 3-rätters från våran A la carté meny
					</span>

					<div
						className={fontStyles['paragraph-1']}
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}>
						<strong>Välj mellan valfri:</strong>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '0.25rem',
								justifyContent: 'center',
							}}>
							<span>Förrätt</span>
							<span>Varmrätt</span>
							<span>Dessert</span>
						</div>
					</div>
				</div>
				<div style={{ marginTop: 'auto' }}>
					<span
						className={fontStyles['paragraph-1']}
						style={{ color: `${colorPallete['brand-color']}` }}>
						545 kr / person
					</span>
				</div>
			</div>
		</Card>
	);
};

const DrinkOffer = () => {
	return (
		<Card variant={'offer'} image={DrinkOfferImage}>
			<div
				style={{
					color: 'white',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					padding: '2rem 2rem 2rem',
					gap: '0.5rem',
				}}>
				<div>
					<span className={fontStyles['subheader-1']}>Dryckes Paket</span>
				</div>
				<div
					className={fontStyles['paragraph-1']}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.5rem',
					}}>
					<span>Dry Martini</span>
					<span>
						2 Glas Vin
						<br />
						<span className={fontStyles['paragraph-2']}>Vitt, Rött, Rosé</span>
					</span>
					<span>1 Valfri Drink</span>
					<span>Efterrätt</span>
				</div>
				<div style={{ marginTop: 'auto' }}>
					<span
						className={fontStyles['paragraph-1']}
						style={{ color: `${colorPallete['brand-color']}` }}>
						545 kr / person
					</span>
				</div>
			</div>
		</Card>
	);
};

const CompanyOffer = () => {
	return (
		<Card variant={'offer'} image={CompanyOfferImage}>
			<div
				style={{
					color: 'white',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					padding: '2rem 2rem 2rem',
					gap: '0.5rem',
				}}>
				<div>
					<span className={fontStyles['subheader-1']}>Företags Paket</span>
				</div>
				<div
					className={fontStyles['paragraph-1']}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.5rem',
					}}>
					<span>3-Rätters Erbjudande</span>
					<span>Dryckes Paket</span>
				</div>

				<div style={{ marginTop: 'auto' }}>
					<span
						className={fontStyles['paragraph-1']}
						style={{ color: `${colorPallete['brand-color']}` }}>
						995 kr / person
					</span>
				</div>
			</div>
		</Card>
	);
};

export { CoursesOffer, DrinkOffer, CompanyOffer };
