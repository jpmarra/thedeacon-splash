import Celebrate from './assets/images/Deacon-Intro-01_Celebrate.jpg';
import Relax from './assets/images/Deacon-Intro-02_Relax.jpg';
import Work from './assets/images/Deacon-Intro-03_Work.jpg'
import History from './assets/images/Deacon-History.jpg'
import Map from './assets/images/Map-Desktop.jpg'

const dictionary = {
    splashIntro: 'The Deacon is a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions and gatherings.',
    learnMore: 'Learn More',
    splashOutro: 'A place to discover and make your own. Whether with friends or family, we promise you won’t want to leave this place.',
    openingDate: ' Coming early spring 2019.',
    aboutTitle: 'ABOUT THE DEACON',
    about: 'Located in the Graduate Hospital neighborhood of Philadelphia, The Deacon is grounded in an unexpected color palette and mood. With minimalist design touches and Bauhaus-influenced features, our space meticulously and thoughtfully pairs old and new. The dynamic setting, encourages creativity, connection, and collaboration, offering each guest a memorable experience.',
    roomsTitle: 'THE ROOMS',
    rooms: 'Eight uniquely designed rooms, a master chef’s kitchen and entertainment space are just a few of the amenities provided at The Deacon.',
    spaceTitle: 'THE SPACE',
    space: 'Vaulted ceilings and arched windows set the backdrop of this space’s rich history, while modern touches and design nods make The Deacon a contemporary curated space.',
    contentModules: [
        {
            title: 'CELEBRATE',
            copy: 'An intimate wedding, a family gathering, a holiday party in a breathtaking space. Vaulted ceilings and arched windows set the backdrop of this space’s rich history, while modern touches and design nods inspired by the art and humor of John Baldessari, make The Deacon a contemporary curated space.',
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
            copy: 'Sometimes a more creative environment makes for a more productive and inspired group. We strongly believe this and are making The Deacon available to those who believe the same.',
            image: Work,
            imageDescriptor: 'Work',
            orientation: 'left'
        }
    ],
    history: {
        title: 'HISTORY',
        copy: 'At the corner of 16th & Christian Street in Center City Philadelphia stands the First African Baptist Church. A building and congregation rich in history. We intend to carry this tradition on with The Deacon as a place to gather, entertain, stay, and collaborate.',
        image: History,
        imageDescriptor: 'History'
    },
    map: {
        image: Map,
        title: 'THE NEIGHBORHOOD',
        imageDescriptor: 'Map',
        foodTitle: 'FOOD & DRINK',
        foodOptions: [
            '1. Pumpkin',
            '2. Miles Table',
            '2. Bob and Barbara’s',
            '3. Ultimo Coffee',
            '4. The Side Car Bar & Grille',
            '5. OCF Coffee',
            '6. Boot & Saddle',
            '7. Sprouts Farmers Market',
            '8. Italian Market'
        ],
        parksTitle: 'PARKS & LANDMARKS',
        parkOptions: [
            '9. Marian Anderson Park',
            '10. Rittenhouse',
            '11. City Hall',
            '12. Magic Gardens',
            '13. Love Park'
        ],
        transportTitle: 'TRANSPORTATION',
        transportOptions: [
            '14. South & Lombard Subway',
            '15. Ellsworth-Federal Subway',
            '16. Amtrak 30th St. Station',
            '17. Walnut-Locust Subway'
        ]
    },
    contact: {
        header: 'We look forward to helping you set the perfect environment for your visit. Let’s get in touch.',
        locationTitle: 'LOCATION',
        locationStreet: '1600 Christian Street',
        locationLocale: 'Philadelphia, PA',
        locationZip: '19146',
        generalTitle: 'GENERAL INQUIRIES',
        generalBody: 'hello@thedeaconphl.com',
        pressTitle: 'PRESS & PARTNERSHIPS',
        pressBody: 'press@thedeaconphl.com'
    }
}

export default dictionary
