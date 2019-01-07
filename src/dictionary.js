import Celebrate from './assets/images/Deacon-Intro-01_Celebrate.jpg';
import Relax from './assets/images/Deacon-Intro-02_Relax.jpg';
import Work from './assets/images/Deacon-Intro-03_Work.jpg'

const dictionary = {
    splashIntro: 'The Deacon is a boutique hotel and event space offering a unique, thoughtfully-curated guest experience, designed for a diverse set of occasions and gatherings.',
    learnMore: 'Learn More',
    splashOutro: 'A place to discover and make your own. Whether with friends or family, we promise you won’t want to leave this place.',
    openingDate: ' Coming early spring 2019.',
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
    ]
}

export default dictionary
