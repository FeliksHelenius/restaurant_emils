import styles from '../../assets/styles/footer/footer.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';

import Logo from '../../components/common/logo.jsx';
import { Link } from 'react-router-dom';

//svgs
import Instagram from '../../assets/images/instagram.svg';
import Tiktok from '../../assets/images/tiktok.svg';
import FlowerType1 from '../../assets/images/flower_type_1.svg';
import FlowerType2 from '../../assets/images/flower_type_2.svg';

//content
import footerContent from '../../assets/content/footer/footerContent.json';

let Footer = () => {
	return (
		<div className={styles['footer']}>
			<div className={styles['footer-inner-wrapper']}>
				<p className={fontStyles['subheader-1']} style={{ color: 'white' }}>
					Est. | 2023
				</p>
				<Logo className={imageStyles['landing-logo']} />
				<div className={styles['footer-column-wrapper']}>
					<div className={styles['column-link-wrapper']}>
						{footerContent['footer_links'].map((link) => {
							let name = link.name || '';
							let path = link.path || '/';

							return (
								<Link key={name} to={path} className={fontStyles['links-1']}>
									{name}
								</Link>
							);
						})}
					</div>

					<div className={styles['column-contact-information-wrapper']}>
						{footerContent['contact_information'].map((content) => {
							let name = content.name || '';
							let value = content.value || '';

							return (
								<a
									href={name == 'tel' ? `tel: ${value}` : `email: ${value}`}
									key={value}
									className={fontStyles['links-1']}>
									{value}
								</a>
							);
						})}
					</div>

					<div className={styles['column-social-media']}>
						{footerContent.social_media.map((content) => {
							let name = content.name;
							let url = content.url;

							return (
								<a
									key={name}
									href={url}
									className={fontStyles['links-1']}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'right',
										gap: '0.5rem',
									}}>
									<span>{name}</span>
									<img
										title={`${name} for restaurant emils`}
										className={imageStyles['social-media-logo']}
										src={name == 'Instagram' ? Instagram : Tiktok}
										alt={`${name} for restaurant emils`}
										loading="lazy"
										width="16px"
										height="16px"
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
			<img
				title="flower type 1 for restaurant emils footer"
				src={FlowerType1}
				className={styles['flower-left']}
				alt=""
				loading="lazy"
				width="240"
				height="369"
			/>
			<img
				title="flower type 2 for restaurant emils footer"
				src={FlowerType2}
				className={styles['flower-right']}
				alt=""
				loading="lazy"
				width="240"
				height="369"
			/>
		</div>
	);
};
export default Footer;
