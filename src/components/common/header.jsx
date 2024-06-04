//styles
import styles from '../../assets/styles/header/header.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';

import LogoColored from './logoColored';
import Hamburger from '../../assets/images/hamburger.svg';
import Close from '../../assets/images/close.svg';

import { Link, useLocation } from 'react-router-dom';

//content
import headerContent from '../../assets/content/header/headerContent.json';

import { useState } from 'react';
import { motion } from 'framer-motion';

let Header = () => {
	let [animation, setAnimation] = useState(false);

	const animationVariants = {
		show: {
			opacity: 1,
			x: -250,
			transition: {
				ease: 'easeOut',
				duration: '0.2',
			},
		},
		hide: {
			x: 0,
			opacity: 0,
		},
	};

	function handleClick() {
		setAnimation((c) => !c);
	}

	return (
		<div className={styles['header']}>
			<div className={styles['header-inner-wrapper']}>
				<LogoColored className={imageStyles['header-logo']} />

				{/* desktop navigation */}
				<div className={styles['header-link-wrapper']}>
					{headerContent['header_links'].map((link) => {
						let name = link.name || '';
						let path = link.path || '/';

						return (
							<Link key={name} to={path} className={fontStyles['links-1']}>
								{name}
							</Link>
						);
					})}
				</div>
				{/* mobile navigation */}
				<img
					title="open navigation icon"
					src={Hamburger}
					alt="hamburger icon"
					loading="lazy"
					width="32px"
					height="32px"
					className={styles['hamburger-icon']}
					onClick={handleClick}
				/>

				<motion.div
					className={styles['mobile-header-slider']}
					variants={animationVariants}
					animate={animation ? 'show' : 'hide'}>
					<img
						title="close navigation icon"
						src={Close}
						alt="close icon"
						loading="lazy"
						width="32px"
						height="32px"
						className={styles['close-icon']}
						onClick={handleClick}
					/>
					<div className={styles['mobile-link-wrapper']}>
						{headerContent['header_links'].map((link) => {
							let name = link.name || '';
							let path = link.path || '/';

							return (
								<Link
									key={name}
									to={path}
									className={fontStyles['header-specific-links']}>
									{name}
								</Link>
							);
						})}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
