import picOne from '../assets/sfapt.jpg'
import picTwo from '../assets/inter.jpg'
import picThree from '../assets/SFhome.webp'
import picFour from '../assets/sfhome1.jpg'

export const SlideData = [ 
    {
        title: 'Luxury High Rise in SOMA', 
        price: '$5,500,000', 
        path: '/LuxuryApartments', 
        label:'View Homes', 
        image: picOne,
        alt:'Apartments'
    
    },
    
    {
        title: 'Beautiful Luxury Apartment',
        price: '$2,000,000',
        path: '/LuxuryApartments', 
        label:'View Homes', 
        image: picTwo,
        alt:'Apartments'
    
    },

    {   
        title: 'Modern Twin Peak Home', 
        price: '$3,400,000',
        path: '/LuxuryApartments', 
        label:'View Homes', 
        image: picThree,
        alt:'Apartments'

    },  


    {      
        title: 'Modern Twin Peak Home', 
        price: '$3,400,000',
        path: '/LuxuryApartments', 
        label:'View Homes', 
        image: picFour,
        alt:'Apartments'

    },
]





// ---------- Add API: 

/*
fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b5988b254amsh70fdfa368381a5cp1409efjsn8ae9087f1925",
		"x-rapidapi-host": "realtor.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

*/