import React from 'react';
import styles from '../..//assets/styles/common/containers.module.css';

const ImageGridMobile = (props) => {
	const { images } = props;

	return (
		<div className={styles['image-grid-container-mobile']}>
			{images.map((src, index) => (
				<div key={index} className={styles['image-grid-item-mobile']}>
					<img
						title="gallery image"
						src={src}
						alt={`Gallery image ${index + 1}`}
						loading="lazy"
						width="160px"
						height="160px"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGridMobile;
