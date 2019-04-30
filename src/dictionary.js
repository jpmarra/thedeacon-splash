import Celebrate from './assets/images/Deacon-Intro-01_Celebrate.jpg';
import Relax from './assets/images/Deacon-Intro-02_Relax.jpg';
import Work from './assets/images/Deacon-Intro-03_Work.jpg'
import History from './assets/images/Deacon-History.jpg'
import historyWide from './assets/images/Deacon-History-Wide.jpg'
import Map from './assets/images/Map-Desktop.jpg'
import Footer from './assets/images/Deacon-Footer.jpg'

const dictionary = {
    generalEmail: 'hello@thedeaconphl.com',
    bookingEmail: 'stay@thedeaconphl.com',
    pressEmail: 'press@thedeaconphl.com',
    partnerEmail: 'partnerships@thedeaconphl.com',
    eventsEmail: 'events@thedeaconphl.com',
    splashIntro: 'The Deacon is a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions and gatherings.',
    learnMore: 'Learn More',
    splashOutro: 'A place to discover and make your own. Whether with friends or family, we promise you won’t want to leave.',
    aboutTitle: 'ABOUT THE DEACON',
    about: 'Located in the Graduate Hospital neighborhood of Philadelphia, The Deacon is an innovative multi-use space housed in a historic building and reimagined with modern amenities. With minimalist design touches and Bauhaus-influenced features, our space meticulously and thoughtfully pairs old and new. The dynamic setting, encourages creativity, connection, and collaboration, offering each guest a memorable experience.',
    roomsTitle: 'THE ROOMS',
    rooms: 'Eight Bedrooms made for unwinding, exploring, and creating memorable experiences. Each room features luxury bedding and mattresses by Wright, unique layouts, original stained glass windows, Sonos speakers, Wifi and many thoughtfully chosen details.',
    spaceTitle: 'THE SPACE',
    space: 'If you’re like us traveling is not only about where you lay your head but the moments you create before and after. Centered in The Deacon is an ample yet intimate space to gather, plan your day, share recipes, and just enjoy one another’s company.',
    contentModules: [
        {
            title: 'CELEBRATE',
            copy: 'Host an intimate wedding, a family gathering, a holiday party and much more in a breathtaking space full of rich history. Vaulted ceilings and arched windows set the backdrop, while modern touches and design nods inspired by Bauhaus, and the art and humor of John Baldessari, make The Deacon a contemporary curated space.',
            image: Celebrate,
            imageDescriptor: 'Celebrate',
            orientation: 'left'
        },
        {
            title: 'RELAX & ENJOY',
            copy: 'Eight uniquely designed rooms, a master chef’s kitchen and entertainment space are just a few of the amenities provided at The Deacon. We have partnered with local businesses to bring you a unique Philadelphia experience from your cup of morning coffee to unwinding after sight-seeing at some of our favorite places.',
            image: Relax,
            imageDescriptor: 'Relax',
            orientation: 'right'
        },
        {
            title: 'WORK & COLLABORATE',
            copy: 'Sometimes a more creative environment makes for a more productive and inspired group. Stage a photoshoot for new products, network with clients, or just have a staycation with the team: The Deacon is meant to foster creativity.',
            image: Work,
            imageDescriptor: 'Work',
            orientation: 'left'
        }
    ],
    history: {
        title: 'HISTORY',
        copy: 'A circa-1906, Watson & Huckel-designed church is reimagined as The Deacon, a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions, gatherings, and creative projects. The space was previously home to the First African Baptist Church a congregation rich in history and offering services to their surrounding community. The Deacon is a reimagining of the space that honors the building\'s origin of being a place to gather. Eight Bedrooms flank an open area made for unwinding, exploring, and creating lasting memories. Each room features bedding and mattresses by Wright, unique layouts and artwork, original stained glass windows, Sonos speakers, Wifi and many thoughtfully chosen details.',
        image: History,
        wideImage: historyWide,
        imageDescriptor: 'History'
    },
    map: {
        image: Map,
        title: 'THE NEIGHBORHOOD',
        imageDescriptor: 'Map',
        foodTitle: 'FOOD & DRINK',
        foodOptions: [
            "1. Pumpkin",
            "2. Miles Table",
            "3. Bob and Barbara’s",
            "4. Ultimo Coffee",
            "5. The Side Car Bar & Grille",
            "6. OCF Coffee",
            "7. Boot & Saddle",
            "8. Sprouts Farmers Market",
            "9. Target",
            "10. Italian Market"
        ],
        parksTitle: 'PARKS & LANDMARKS',
        parkOptions: [
            "11. Marian Anderson Park",
            "12. Rittenhouse",
            "13. City Hall",
            "14. Love Park",
            "15. Magic Gardens"
        ],
        transportTitle: 'TRANSPORTATION',
        transportOptions: [
            "16. Walnut-Locust Subway",
            "17. Lombard-South Subway",
            "18. Ellsworth-Federal Subway",
            "19. Amtrak 30th St. Station",
            "20. Lincoln Square Parking"
        ]
    },
    contact: {
        header: 'We look forward to helping you set the perfect environment for your visit. Let’s get in touch.',
        locationTitle: 'LOCATION',
        locationStreet: '1600 Christian Street',
        locationLocale: 'Philadelphia, PA',
        locationZip: '19146',
        generalTitle: 'GENERAL INQUIRIES',
        pressTitle: 'PRESS & PARTNERSHIPS',
        newsletterTitle: 'Stay up to date',
        newsletterCopy: 'Sign up to receive news and updates from The Deacon'
    },
    footer: {
        image: Footer,
        title: 'A place to gather.',
        contactTitle: 'CONTACT & BOOKING',
        contactGeneral: 'GENERAL INQUIRIES',
        socialTitle: 'CONNECT WITH US',
        copyright: '2019 The Deacon'
    }
}

export default dictionary