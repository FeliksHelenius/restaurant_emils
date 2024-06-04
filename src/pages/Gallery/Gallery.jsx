import React from 'react';
import { useState, useEffect } from 'react';

//components
// use imagegridmobile - it does the same as ImageGrid but is more responsive.
import ImageGridMobile from '../../components/containers/imageGridMobile';

//styles
import styles from '../../assets/styles/gallery/gallery.module.css';
import fontStyles from '../../assets/styles/common/fonts.module.css';
import colorPallete from '../../assets/theme/colorPallete.json';

//images
import restaurantImage1 from '../../assets/images/image_4.jpg';
import restaurantImage2 from '../../assets/images/image_5.jpg';
import restaurantImage3 from '../../assets/images/image_10.jpg';
import restaurantImage4 from '../../assets/images/image_11.jpg';
import restaurantImage5 from '../../assets/images/image_12.jpg';
import restaurantImage6 from '../../assets/images/image_13.jpg';
import restaurantImage7 from '../../assets/images/image_14.jpg';
import restaurantImage8 from '../../assets/images/image_15.jpg';
import restaurantImage9 from '../../assets/images/image_16.jpg';
import restaurantImage10 from '../../assets/images/image_17.jpg';

import foodImage1 from '../../assets/images/image_2.jpg';
import foodImage2 from '../../assets/images/image_3.jpg';
import foodImage3 from '../../assets/images/image_6.jpg';
import foodImage4 from '../../assets/images/image_7.jpg';
import foodImage5 from '../../assets/images/image_8.jpg';
import foodImage6 from '../../assets/images/image_9.jpg';

let restaurantImages = [
	restaurantImage2,
	restaurantImage3,
	restaurantImage7,
	restaurantImage5,
	restaurantImage1,
	restaurantImage4,
	restaurantImage6,
	restaurantImage8,
	restaurantImage9,
	restaurantImage10,
];

let foodImages = [
	foodImage2,
	foodImage4,
	foodImage5,
	foodImage3,
	foodImage1,
	foodImage6,
];
export default function Gallery() {
	const [imageCategory, setImageCategory] = useState('restaurant');

	return (
		<div className={styles['page-wrapper']}>
			<h1 className={fontStyles['header-1']}>Gallery</h1>
			<div className={styles['button-wrapper']}>
				<div className={styles['button-inner-wrapper']}>
					<button onClick={() => setImageCategory('restaurant')}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									imageCategory === 'restaurant'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							Restaurant
						</span>
					</button>
					<button onClick={() => setImageCategory('food')}>
						<span
							className={fontStyles['links-1']}
							style={{
								color:
									imageCategory === 'food'
										? colorPallete['text']['selected']
										: colorPallete['text']['unselected'],
							}}>
							Food
						</span>
					</button>
				</div>
			</div>
			<div className={styles['image-grid-wrapper']}>
				<ImageGridMobile
					images={
						imageCategory === 'restaurant' ? restaurantImages : foodImages
					}
				/>
			</div>
		</div>
	);
}
