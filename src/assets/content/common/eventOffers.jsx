import ThreeCourseOffer from '../../images/card_images/3_course_offer.jpg';
import drinkOffer from '../../images/card_images/drink_offer.jpg';
import companyOffer from '../../images/card_images/company_offer.jpg';
import tomahawk from '../../images/card_images/tomahawk.jpg';
import burger from '../../images/card_images/burger.jpg';

const EventOffers = {
	'offer-1': {
		main: 'Combine Your Own Menu',
		drink: 'A glass of wine of your choice',
		'amount-of-people': false,
		description: '1 starter, 1 main course',
		price: '545:- / person',
		'image-path': ThreeCourseOffer,
	},
	'offer-2': {
		main: 'Drink Package',
		drink: false,
		'amount-of-people': false,
		description:
			'1 aperitif, 2 glasses of wine (white, red, rosé, cava), 1 optional cocktail',
		price: '545:- / person',
		'image-path': drinkOffer,
	},
	'offer-3': {
		main: 'Grill Tray',
		drink: ['vin', 'cava'],
		'amount-of-people': '2 people',
		description: 'Minimum of 2 people',
		price: '545:- / person',
		'image-path': companyOffer,
	},
	'offer-4': {
		main: 'Tomahawk',
		drink: 'A glass of wine of your choice',
		'amount-of-people': '2 people',
		description:
			"Pre-marinated Tomahawk steak (1100g) cooked chef's style, served with oven-grilled mushroom and bell pepper filled with Parmesan and garlic butter, asparagus, and potato wedges. Accompanied by Cognac pepper sauce and red wine sauce. ",
		price: '555:- / person',
		'image-path': tomahawk,
	},
	'offer-5': {
		main: 'Lobster',
		drink: 'A glass of champagne',
		'amount-of-people': '1 person',
		description:
			'Garlic and Parmesan-grilled lobster, served with garlic and chili sautéed scampi, blue mussels, and clams, topped with grilled lemon and dill.',
		price: '575:- / person',
		'image-path': companyOffer,
	},
};

export default EventOffers;
