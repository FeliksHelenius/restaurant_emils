import fontStyles from '../../assets/styles/common/fonts.module.css';
import containerStyles from '../../assets/styles/common/containers.module.css';
import Card from './card';

export default function ScrollContainer({ cards }) {
	return (
		<div className={containerStyles['scroll-container']}>
			<div className={containerStyles['scroll-container-inner-wrapper']}>
				{cards.map((card) => {
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
								display: 'flex',
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
			</div>
		</div>
	);
}
