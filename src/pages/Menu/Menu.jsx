import React from 'react';
import { useState, useEffect } from 'react';

//styles
import styles from '../../assets/styles/menu/menu.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
import colorPallete from '../../assets/theme/colorPallete.json';
//images
import aLaCarte1 from '../../assets/images/menu/a_la_carte/a_la_carte_01.jpg';
import aLaCarte2 from '../../assets/images/menu/a_la_carte/a_la_carte_02_forratter.jpg';
import aLaCarte3 from '../../assets/images/menu/a_la_carte/a_la_carte_03_varmratter.jpg';
import aLaCarte4 from '../../assets/images/menu/a_la_carte/a_la_carte_04_efterratter.jpg';
//english
import aLaCarte1ENG from '../../assets/images/menu/a_la_carte/a_la_carte_eng/a_la_carte_01.jpg';
import aLaCarte2ENG from '../../assets/images/menu/a_la_carte/a_la_carte_eng/a_la_carte_02_starters.jpg';
import aLaCarte3ENG from '../../assets/images/menu/a_la_carte/a_la_carte_eng/a_la_carte_03_main.jpg';
import aLaCarte4ENG from '../../assets/images/menu/a_la_carte/a_la_carte_eng/a_la_carte_04_desserts.jpg';

import beverages1 from '../../assets/images/menu/beverages/beverages_01.jpg';
import beverages2 from '../../assets/images/menu/beverages/beverages_02.jpg';
import beverages3 from '../../assets/images/menu/beverages/beverages_03.jpg';
import beverages4 from '../../assets/images/menu/beverages/beverages_04.jpg';
//english
import beverages1ENG from '../../assets/images/menu/beverages/beverages_eng/beverages_01_eng.jpg';
import beverages2ENG from '../../assets/images/menu/beverages/beverages_eng/beverages_02_eng.jpg';
import beverages3ENG from '../../assets/images/menu/beverages/beverages_eng/beverages_03_eng.jpg';
import beverages4ENG from '../../assets/images/menu/beverages/beverages_eng/beverages_04_eng.jpg';

import GBFlag from '../../assets/images/gb.svg';
import SEFlag from '../../assets/images/se.svg';

import Left from '../../assets/images/left.svg';
import Right from '../../assets/images/right.svg';

export default function Menu() {
	const [language, setLanguage] = useState('SWE');
	const [menu, setMenu] = useState('aLaCarte');
	const [page, setPage] = useState(1);

	return (
		<div className={styles['page-wrapper']}>
			<h1 className={fontStyles['header-1']}>Menu</h1>
			<div className={styles['button-wrapper']}>
				<div className={styles['button-inner-wrapper']}>
					<button
						onClick={() => {
							setMenu('aLaCarte');
						}}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									menu === 'aLaCarte'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							A La Carté
						</span>
					</button>
					<button
						onClick={() => {
							setMenu('beverages');
						}}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									menu === 'beverages'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							Beverages
						</span>
					</button>
					<button
						onClick={() => {
							setMenu('partyMenu');
						}}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									menu === 'partyMenu'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							Party Menu
						</span>
					</button>
				</div>
				<div className={styles['button-inner-wrapper']}>
					<button
						onClick={() => {
							setLanguage('SWE');
						}}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									language === 'SWE'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							SWE
						</span>
						<img
							title="swedish flag"
							src={SEFlag}
							alt=""
							loading="lazy"
							width="24px"
							height="24px"
						/>
					</button>
					<button
						onClick={() => {
							setLanguage('ENG');
						}}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									language === 'ENG'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							ENG
						</span>
						<img
							title="english flag"
							src={GBFlag}
							alt=""
							loading="lazy"
							width="24px"
							height="24px"
						/>
					</button>
				</div>
			</div>
			<div className={styles['menu-wrapper']}>
				<button
					className={styles['page-button']}
					style={{
						display: menu !== 'partyMenu' ? 'flex' : 'none',
					}}>
					<img
						title="left arrow for menu page"
						className={imageStyles['svgs']}
						src={Left}
						alt="left"
						loading="lazy"
						width="40px"
						height="40px"
						onClick={() => setPage(1)}
					/>
				</button>
				{menu === 'aLaCarte' && (
					<div
						className={styles['menu-inner-wrapper']}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						{page === 1 ? (
							<MenuPage1 language={language} />
						) : (
							<MenuPage2 language={language} />
						)}
					</div>
				)}
				{menu === 'beverages' && (
					<div
						className={styles['menu-inner-wrapper']}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						{page === 1 ? (
							<BeveragesPage1 language={language} />
						) : (
							<BeveragesPage2 language={language} />
						)}
					</div>
				)}
				{menu === 'partyMenu' && (
					<div
						className={styles['menu-inner-wrapper']}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<PartyMenu language={language} />
					</div>
				)}

				<button
					className={styles['page-button']}
					style={{
						display: menu !== 'partyMenu' ? 'flex' : 'none',
					}}>
					<img
						title="right arrow for menu page"
						className={imageStyles['svgs']}
						src={Right}
						alt="right"
						loading="lazy"
						width="40px"
						height="40px"
						onClick={() => setPage(2)}
					/>
				</button>
			</div>
			<div
				className={styles['active-page-display']}
				style={{
					display: menu !== 'partyMenu' ? 'flex' : 'none',
				}}>
				<div
					style={{
						width: '1.5rem',
						height: '1.5rem',
						borderRadius: '50%',
						backgroundColor:
							page === 1
								? colorPallete['text']['selected']
								: colorPallete['text']['unselected'],
					}}></div>
				<div
					style={{
						width: '1.5rem',
						height: '1.5rem',
						borderRadius: '50%',
						backgroundColor:
							page === 2
								? colorPallete['text']['selected']
								: colorPallete['text']['unselected'],
					}}></div>
			</div>
		</div>
	);
}

const MenuPage1 = ({ language }) => {
	return (
		<React.Fragment>
			<img
				title="aLaCarte page 1"
				src={language === 'SWE' ? aLaCarte1 : aLaCarte1ENG}
				alt="aLaCarte1"
				loading="lazy"
				width="560px"
				height="800px"
			/>

			<img
				title="aLaCarte page 2"
				src={language === 'SWE' ? aLaCarte2 : aLaCarte2ENG}
				alt="aLaCarte2"
				loading="lazy"
				width="560px"
				height="800px"
			/>
		</React.Fragment>
	);
};

const MenuPage2 = ({ language }) => {
	return (
		<React.Fragment>
			<img
				title="aLaCarte page 3"
				src={language === 'SWE' ? aLaCarte3 : aLaCarte3ENG}
				alt="aLaCarte3"
				loading="lazy"
				width="560px"
				height="800px"
			/>

			<img
				title="aLaCarte page 4"
				src={language === 'SWE' ? aLaCarte4 : aLaCarte4ENG}
				alt="aLaCarte4"
				loading="lazy"
				width="560px"
				height="800px"
			/>
		</React.Fragment>
	);
};

const BeveragesPage1 = ({ language }) => {
	return (
		<React.Fragment>
			<img
				title="beverages page 1"
				src={language === 'SWE' ? beverages1 : beverages1ENG}
				alt="beverages1"
				loading="lazy"
				width="560px"
				height="800px"
			/>
			<img
				title="beverages page 2"
				src={language === 'SWE' ? beverages2 : beverages2ENG}
				alt="beverages2"
				loading="lazy"
				width="560px"
				height="800px"
			/>
		</React.Fragment>
	);
};

const BeveragesPage2 = ({ language }) => {
	return (
		<React.Fragment>
			<img
				title="beverages page 3"
				src={language === 'SWE' ? beverages3 : beverages3ENG}
				alt="beverages3"
				loading="lazy"
				width="560px"
				height="800px"
			/>

			<img
				title="beverages page 4"
				src={language === 'SWE' ? beverages4 : beverages4ENG}
				alt="beverages4"
				loading="lazy"
				width="560px"
				height="800px"
			/>
		</React.Fragment>
	);
};

const PartyMenu = ({ language }) => {
	const SWE = () => {
		return (
			<div
				style={{
					textAlign: 'center',
				}}>
				<p className={fontStyles['paragraph-1']}>
					KÄNN DIG FRI ATT KOMBINERA DIN EGEN 3-RÄTTERS MENY ENDAST 545 KR /
					PERSON VAL AV FÖRRÄTT, VAL AV VARMRÄTT & VAL AV DESSERT
				</p>
				<hr />
				<div
					style={{
						padding: '1rem 0 2rem',
					}}>
					<p className={fontStyles['paragraph-1']}>
						<strong>FÖRRÄTTER</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						TOAST SKAGEN <br /> KANTARELLTOAST <br /> TUNN TARTAR <br /> RÅBIFF
						<br /> BRUCHETTA (Vegan)
					</span>
					<p className={fontStyles['paragraph-1']}>
						<strong>VARMRÄTTER</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						GRILLAD VÄLMARMORERAD ENTRECOTE <br /> COGNACPEPPARSTEK <br />
						GRILLAD TUNAFISK
						<br /> FISK & SKALDJURSGRYTA <br /> HEMGJORDA VEGANSKA BOLLAR
						(vegan)
					</span>
					<p className={fontStyles['paragraph-1']}>
						<strong>DESSERTER</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						CHOKLADFONDANT <br /> CREME BRULEE <br /> PANNA COTTA <br />
						VANILJGLASS toppad med Baileys <br /> HUSETS HALLONSORBET (Vegan)
					</span>
				</div>
				<hr />
				<p className={fontStyles['paragraph-1']}>
					ÄVEN TILLGÄNGLIG DRICKPAKET 545 kr / person
				</p>
				<span className={fontStyles['paragraph-1']}>
					1 Dry Martini
					<br />
					2 Glas husets röd / vit / rosé vin
					<br />1 Fri Avec (valfri drink från dryckesmenyn)
				</span>
				<p className={fontStyles['paragraph-1']}>
					Vid allergi, prata med personalen
				</p>
			</div>
		);
	};

	const ENG = () => {
		return (
			<div
				style={{
					textAlign: 'center',
				}}>
				<p className={fontStyles['paragraph-1']}>
					FEEL FREE TO COMBINE YOUR OWN 3-COURSE MENU ONLY SEK 545 / PERSON
					CHOICE OF STARTER, CHOICE OF HOT DISH & CHOICE OF DESSERT
				</p>
				<hr />
				<div
					style={{
						padding: '1rem 0 2rem',
					}}>
					<p className={fontStyles['paragraph-1']}>
						<strong>STARTERS</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						TOAST SKAGEN <br /> CHANTARELL TOAST <br /> TUNA TARTARE <br /> RAW
						BEEF <br /> BRUCHETTA (Vegan)
					</span>
					<p className={fontStyles['paragraph-1']}>
						<strong>MAINS</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						GRILLED WELL MARBLE ENTRECOTE <br /> COGNAC PEPPER ROAST <br />{' '}
						GRILLED TUNA FISH
						<br /> FISH & SHELLFISH STEW <br /> HOMEMADE VEGAN BALLS (vegan)
					</span>
					<p className={fontStyles['paragraph-1']}>
						<strong>DESSERTS</strong>
					</p>
					<span className={fontStyles['paragraph-2']}>
						CHOCOLATE FONDANT <br /> CREAM BRULEE <br /> PANNA COTTA <br />
						VANILLA ICE CREAM topped with Baileys <br /> THE HOUSE RASPBERRY
						SORBET (Vegan)
					</span>
				</div>
				<hr />
				<p className={fontStyles['paragraph-1']}>
					ALSO AVAILABLE DRINK PACKAGE SEK 545/ person
				</p>
				<span className={fontStyles['paragraph-1']}>
					1 Dry Martini
					<br />
					2 Glass house red / white / rosé wine
					<br />1 Free Avec (any drink from the drinks menu)
				</span>
				<p className={fontStyles['paragraph-1']}>
					In case of allergy, talk to the staff
				</p>
			</div>
		);
	};

	return language === 'SWE' ? <SWE /> : <ENG />;
};
