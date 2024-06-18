import { useState } from 'react';
// images
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';
// styles
import fontStyles from '../../assets/styles/common/fonts.module.css';
import containerStyles from '../../assets/styles/common/containers.module.css';
import imageStyles from '../../assets/styles/common/images.module.css';
// components
import Card from './card';

export default function CarouselContainer({ cards }) {
	const [cardIndex, setCardIndex] = useState(0);
	let maxIndex = cards.length - 1;

	return (
		<div className={containerStyles['carousel-container']}>
			<img
				src={left}
				className={imageStyles['svgs']}
				alt="scroll left"
				onClick={() => {
					if (cardIndex === 0) setCardIndex(maxIndex);
					else setCardIndex(cardIndex - 1);
				}}
			/>
			{cards.map((card, index) => {
				let title = card.title;
				let description = card.description;
				let image = card.image;

				return (
					<Card
						key={title}
						variant={'offer'}
						image={image}
						hoverCard={true}
						style={{
							textAlign: 'center',
							padding: '1rem',
							display: index === cardIndex ? 'flex' : 'none',
							flexDirection: 'column',
							justifyContent: 'flex-start',
						}}>
						<p className={fontStyles['card-title']}>{title}</p>
						<p className={fontStyles['card-description-small']}>
							{description}
						</p>
					</Card>
				);
			})}
			<img
				src={right}
				className={imageStyles['svgs']}
				alt="scroll right"
				onClick={() => {
					if (cardIndex === maxIndex) setCardIndex(0);
					else setCardIndex(cardIndex + 1);
				}}
			/>
		</div>
	);
}
