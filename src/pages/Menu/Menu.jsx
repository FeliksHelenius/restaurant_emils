import React from 'react';
import { useState, useEffect } from 'react';

//styles
import styles from '../../assets/styles/menu/menu.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
import colorPallete from '../../assets/theme/colorPallete.json';

import GBFlag from '../../assets/images/gb.svg';
import SEFlag from '../../assets/images/se.svg';

//menu
import menu from '../../assets/content/menus/food/menu.json';
import menuENG from '../../assets/content/menus/food/eng/menuENG.json';

//beverages
import drinkMenu from '../../assets/content/menus/drink/drinkMenu.json';
import drinkMenuENG from '../../assets/content/menus/drink/eng/drinkMenuENG.json';

//groupmenu
import groupMenu from '../../assets/content/menus/food/groupMenu.json';
import groupMenuENG from '../../assets/content/menus/food/eng/groupMenuENG.json';

import MenuSection from '../../components/menu/menuSection';

export default function Menu() {
	const [language, setLanguage] = useState('SWE');
	const [menu, setMenu] = useState('aLaCarte');

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
				{menu === 'aLaCarte' && (
					<div
						className={styles['menu-inner-wrapper']}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<ALaCarte language={language} />
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
						<Beverages language={language} />
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
			</div>
		</div>
	);
}

const ALaCarte = ({ language }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			{language === 'SWE'
				? Object.keys(menu).map((v, i) => (
						<MenuSection key={v} value={v} index={i} menu={menu[v]} />
				  ))
				: Object.keys(menuENG).map((v, i) => (
						<MenuSection key={v} value={v} index={i} menu={menuENG[v]} />
				  ))}
		</div>
	);
};

const Beverages = ({ language }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			{language === 'SWE'
				? Object.keys(drinkMenu).map((v, i) => (
						<MenuSection key={v} value={v} index={i} menu={drinkMenu[v]} />
				  ))
				: Object.keys(drinkMenuENG).map((v, i) => (
						<MenuSection key={v} value={v} index={i} menu={drinkMenuENG[v]} />
				  ))}
		</div>
	);
};

const PartyMenu = ({ language }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			{language === 'SWE' ? (
				Object.keys(groupMenu).map((section, i) => {
					return (
						<div key={i}>
							{section === groupMenu['title'] ? (
								<p className={fontStyles['menu-title']}>{groupMenu[section]}</p>
							) : (
								<p></p>
							)}
						</div>
					);
				})
			) : (
				<div></div>
			)}
		</div>
	);
};
