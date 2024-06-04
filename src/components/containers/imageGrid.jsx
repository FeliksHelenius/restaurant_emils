import React from 'react';
import styles from '../..//assets/styles/common/containers.module.css';

const ImageGrid = (props) => {
	const { images } = props;
	return (
		<div className={styles['image-grid-container']}>
			{images.map((src, index) => (
				<div key={index} className={styles['image-grid-item']}>
					<img
						title="gallery image"
						src={src}
						alt={`Gallery image ${index + 1}`}
						loading="lazy"
						width="256px"
						height="256px"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
