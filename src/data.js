
import {SiOpenaigym} from 'react-icons/si'
const Trainer1 = require('./images/tofunmi.jpeg')
const Trainer2 = require('./images/tolu.jpeg')
const Trainer3 = require('./images/femi.jpeg')
const Trainer4 = require('./images/abdul.jpeg')
const Trainer5 = require('./images/bisola.jpeg')
const Trainer6 = require('./images/ay.jpeg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Olaniyan Tofunmi',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Oguntoyinbo Tolulope',
        job: ' Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Ogunjemilua Olufemi',
        job: ' Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Ahbdulrahmon Hikeholuwa',
        job: ' Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Oyebola Bisola',
        job: ' Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 1,
        image: Trainer6,
        name: 'Ayinde Ayomide',
        job: ' Physical intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }




]

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name:"About",
        path:'/About',
    },
    {
        name:"Gallery",
        path:'/Gallery'
    },
    {
        name:"Plans",
        path:'/Plans'
    },
    {
        name:"Trainers",
        path:'/Trainers'
    },
    {
        name:"Contact",
        path:'/Contact'
    },
    
]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program one",
        info: "This is the day that the lord has made.we will rejoice",
        path: "/programs/111"
    },
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program two",
        info: "This is the day that the lord has made.we will rejoice",
        path: "/programs/222"
    },
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program three",
        info: "This is the day that the lord has made.we will rejoice",
        path: "/programs/333"
    },
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program four",
        info: "This is the day that the lord has made.we will rejoice",
        path: "/programs/444"
    },
]

export const faqs = [
    {
        id: 1,
        question: "How often should i exercise",
        answer: "As a general goal, aim for at least 30minutes of moderate physical activity everyday"
                    
    },
    {
        id: 2,
        question: "What time of the day is best to work out",
        answer: "Morning workouts may promote healthier habits, while afternoon or evening workouts may boost your exercise perfomance. However, the best time to exercise depends on your preference and fitness goals"
    },
    {
        id: 3,
        question: "How long should i work out for",
        answer: "Workouts should last no less than 60minutes and no more than 90minutes"
    },{
        id: 4,
        question: "Should i do strength training first or cardio",
        answer: "Either order is technically fine, but if you do strength training first, your workout will be much more effective overall"
    },
]

export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title:"value one",
        desc: "Helps maintain a healthy body weight"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title:"value two",
        desc: "Lowers blood pressure"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title:"value three",
        desc: "Decreases the risk of heart disease"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title:"value four",
        desc: "Reduces the risk of certain cancer"
    }

]

export const testimonials = [
    {
        id: 1,
        name:"Tolulope Tobi",
        quote: "Exercise should be regarded as tribute to the heart",
        job: "Digital Marketer",
        avatar: require('./images/tolu.jpeg')
    },
    {
        id: 2,
        name:"Tofunmi",
        quote: "A fit body, a calm mind, a house full of love",
        job: "Frontend Engineer",
        avatar: require('./images/tofunmi.jpeg')
    },
    {
        id: 3,
        name:"Oyebola Abisola",
        quote: "Physical fitness is the first requisite of happiness",
        job: "Medical Lab Scientist",
        avatar: require('./images/bisola.jpeg')
    },
    {
        id: 4,
        name:"Ogunjemilua Olufemi",
        quote: "Good health is not something we can buy, However, it can be an extremely valuable savings account",
        job: "Data Analytics ",
        avatar: require('./images/femi.jpeg')
    },
    {
        id: 5,
        name:"Abdulrahmon Hikeholuwa",
        quote: "I believe that the greatest gift you can give your family and the world is a healthy you",
        job: "Chemist",
        avatar: require('./images/abdul.jpeg')
    },
    {
        id: 6,
        name:"Ayinde Ayomide",
        quote: "The first wealth is health",
        job: "Footballer",
        avatar: require('./images/ay.jpeg')
    },
]
export const plans = [
    {
        id: 1,
        name: "Silver Package",
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First feature', available:true},
            {feature: 'Second feature', available:true},
            {feature: 'Third feature', available:true},
            {feature: 'Fourth feature', available:true},
            {feature: 'Fifth feature', available:false},
            {feature: 'Sixth feature', available:false},
            {feature: 'Seventh feature', available:false},
            {feature: 'Eighth feature', available:false},
            {feature: 'Nineth feature', available:false},
            {feature: 'Tenth feature', available:false},
            {feature: 'Eleventh feature', available:false}
        ]
    },
    {
        id: 2,
        name: "Gold Package",
        desc: 'This package is perfect for beginners who knows what they are doing',
        price: 49.99,
        features: [
            {feature: 'First feature', available:true},
            {feature: 'Second feature', available:true},
            {feature: 'Third feature', available:true},
            {feature: 'Fourth feature', available:true},
            {feature: 'Fifth feature', available:true},
            {feature: 'Sixth feature', available:true},
            {feature: 'Seventh feature', available:false},
            {feature: 'Eighth feature', available:false},
            {feature: 'Nineth feature', available:false},
            {feature: 'Tenth feature', available:false},
            {feature: 'Eleventh feature', available:false}
        ]
    },
    {
        id: 3,
        name: "Plantinum Package",
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First feature', available:true},
            {feature: 'Second feature', available:true},
            {feature: 'Third feature', available:true},
            {feature: 'Fourth feature', available:true},
            {feature: 'Fifth feature', available:true},
            {feature: 'Sixth feature', available:true},
            {feature: 'Seventh feature', available:true},
            {feature: 'Eighth feature', available:true},
            {feature: 'Nineth feature', available:true},
            {feature: 'Tenth feature', available:true},
            {feature: 'Eleventh feature', available:true}
        ]
    }

]
