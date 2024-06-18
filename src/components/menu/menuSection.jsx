import { Fragment } from 'react';
//styles
import fontStyles from '../../assets/styles/common/fonts.module.css';

export default function MenuSection({ value, index, menu }) {
	console.log('ran');
	return (
		<div style={{ textAlign: 'center' }}>
			{Array.isArray(menu) ? (
				menu.map((v, i) => {
					return (
						<Fragment key={i}>
							<p className={fontStyles['menu-title']}>{v['title']}</p>
							<hr />
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									padding: '0 1rem',
									alignItems: 'center',
								}}>
								{v['items'].map((item, i) => {
									let itemName = item['title'];
									let description = item['description'];
									let price = item['price'];

									return (
										<Fragment key={i}>
											<p
												className={fontStyles['menu-item']}
												style={{
													textAlign: price ? 'left' : 'center',
													gridColumn: price ? 'auto' : 'span 2',
												}}>
												{itemName}
											</p>
											<div
												className={fontStyles['menu-item']}
												style={{ textAlign: 'right' }}>
												{Array.isArray(price) ? (
													<div
														style={{
															display: 'flex',
															gap: '1rem',
															justifyContent: 'flex-end',
															alignItems: 'center',
														}}>
														<p>{price[0] + ' :-'}</p> |{' '}
														<p>{price[1] + ' :-'}</p>
													</div>
												) : (
													price && price + ' :-'
												)}
											</div>
										</Fragment>
									);
								})}
							</div>
						</Fragment>
					);
				})
			) : (
				<Fragment>
					<p className={fontStyles['menu-title']}>{menu['title']}</p>
					<hr />
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							padding: '0 1rem',
							alignItems: 'center',
						}}>
						{menu['items'].map((item, i) => {
							let itemName = item['title'];
							let description = item['description'];
							let price = item['price'];

							return (
								<Fragment key={i}>
									<p
										className={fontStyles['menu-item']}
										style={{
											textAlign: price ? 'left' : 'center',
											gridColumn: price ? 'auto' : 'span 2',
										}}>
										<span>
											{
												<span className={fontStyles['menu-item']}>
													{itemName}
												</span>
											}
											{description && (
												<span className={fontStyles['menu-item-description']}>
													<br />
													{description}
												</span>
											)}
										</span>
									</p>
									<p
										className={fontStyles['menu-item']}
										style={{ textAlign: 'right' }}>
										{price && price + ' :-'}
									</p>
								</Fragment>
							);
						})}
					</div>
				</Fragment>
			)}
		</div>
	);
}
