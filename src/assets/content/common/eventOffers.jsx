import ThreeCourseOffer from '../../images/card_images/3_course_offer.jpg';
import drinkOffer from '../../images/card_images/drink_offer.jpg';
import companyOffer from '../../images/card_images/company_offer.jpg';
import tomahawk from '../../images/card_images/tomahawk.jpg';
import burger from '../../images/card_images/burger.jpg';

const EventOffers = {
	'offer-1': {
		main: '3-Course Menu',
		drink: false,
		'amount-of-people': false,
		description: 'Choice of appetizer, main course & dessert',
		price: '545:- / person',
		'image-path': ThreeCourseOffer,
	},
	'offer-2': {
		main: 'Drink Package',
		drink: false,
		'amount-of-people': false,
		description:
			'choice of aperitif, 2 glasses of wine or cava, 1 choice of drink',
		price: '545:- / person',
		'image-path': drinkOffer,
	},
	'offer-3': {
		main: 'Grill Tray / Tomahawk',
		drink: false,
		'amount-of-people': '2 people',
		description: 'Minimum of 2 people',
		price: '415:- / person',
		'image-path': companyOffer,
	},
};

export default EventOffers;
