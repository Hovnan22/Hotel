import { HotelList, Hotels } from "../types/types"

export const hotelsList: HotelList[] = [
    {
        id: 1,
        imageUrl: require('../assets/images/hotel1.png'),
        distanse: '8 mins walking ',
        rating: '7.6',
        name: 'Hilton Garden Inn Manchester Emirates Old Trafford',
        priceCategory: 2,
        bookingLogo: require('../assets/images/booking.png'),
        buttonLink: "https://zoftify.com/"
    },
    {
        id: 2,
        imageUrl: require('../assets/images/hotel2.png'),
        distanse: '12 mins walking',
        rating: '9.7',
        name: 'Marriott Plaza',
        priceCategory: 3,
        bookingLogo: require('../assets/images/booking.png'),
        buttonLink: 'https://zoftify.com/'
    }
]


export const HotelsDetails : Hotels = {
    1: {
        id: 1,
        image: require('../assets/images/hotelDescr.png'),
        name: 'Hilton Garden Inn Manchester Emirates Old Trafford',
        overview: 'Welcome to Hilton Garden Inn Manchester Emirates Old Trafford, your premier destination for luxury accommodation in the heart of Manchester. Situated adjacent to the iconic Emirates Old Trafford cricket ground.',
        buttonLink: 'https://zoftify.com/'
    },
    2: {
        id: 2,
        image: require('../assets/images/hotelDescr.png'),
        name: 'Marriott Plaza',
        overview: 'Welcome to Marriott Plaza, your premier destination for luxury accommodation in the heart of Manchester. Situated adjacent to the iconic Emirates Old Trafford cricket ground.',
        buttonLink: 'https://zoftify.com/'
    }
}
