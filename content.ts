import person1 from './assets/images/reviews/person-1.png';
import person2 from './assets/images/reviews/person-2.png';
import person3 from './assets/images/reviews/person-3.png';
import person4 from './assets/images/reviews/person-4.png';
import person5 from './assets/images/reviews/person-5.png';
import blog1 from './assets/images/blog/blog-1.jpg';
import blog2 from './assets/images/blog/blog-2.jpg';
import blog3 from './assets/images/blog/blog-3.jpg';
import {NavigationItem} from "./types/navigationItem";
import {Company} from "./types/company";
import {Advantage} from "./types/advantage";
import {StatisticItem} from "./types/statisticItem";
import {Review} from "./types/review";
import {Question} from "./types/question";
import {BlogPostPreview} from "./types/blog";
import {FooterColumn, FooterItem} from "./types/footer";
import {PriceCard} from "./types/priceCard";
import {AddOnCard} from "./types/AddOnCard";

export const headerNavigation:NavigationItem[] = [
    {
        id: 1,
        title: 'About',
        url: '',
    },
    {
        id: 2,
        title: 'Pricing',
        url: '/pricing',
    },
    {
        id: 3,
        title: 'Blog',
        url: '',
    },
    {
        id: 4,
        title: 'Contact',
        url: '/contact',
    }
]

export const companies:Company[] = [
    {
        id: 1,
        icon: 'company-1',
    },
    {
        id: 2,
        icon: 'company-2',
    },
    {
        id: 3,
        icon: 'company-3',
    },
    {
        id: 4,
        icon: 'company-4',
    },
    {
        id: 5,
        icon: 'company-5',
    },
]

export const advantages:Advantage[] = [
    {
        id: 1,
        icon: 'advantages/planet',
        title: 'Flexible Spaces',
        text: "Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs."
    },
    {
        id: 2,
        icon: 'advantages/card',
        title: 'Transparent Pricing',
        text: "Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank."
    },
    {
        id: 3,
        icon: 'advantages/id',
        title: 'Tailored Memberships',
        text: "Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style."
    },
]

export const statistics: StatisticItem[] = [
    {
        id: 1,
        label: 'Community Growth',
        value: '240%',
    },
    {
        id: 2,
        label: 'Technology Uptime',
        value: '99%',
    },
    {
        id: 3,
        label: 'Happy Members',
        value: '50+',
    },
    {
        id: 4,
        label: 'Renewable Energy Sources',
        value: '100%',
    },
]

export const reviews: Review[] = [
    {
        id: 1,
        image: person1,
        text: "\"The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!\"",
        author: 'Liam Brown',
        position: 'Software Engineer, TechStartup Innovations',
    },
    {
        id: 2,
        image: person2,
        text: "\"The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.\"",
        author: 'Michael Rodriguez',
        position: ' Creative Director, DesignCraft Studio',
    },
    {
        id: 3,
        image: person3,
        text: "\"As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work.\"",
        author: 'Michael Thompson',
        position: 'Graphic Designer, DesignCo',
    },
    {
        id: 4,
        image: person4,
        text: "\"The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.\"",
        author: 'David Wilson',
        position: 'Project Manager, SoftwareSolutions LLC',
    },
    {
        id: 5,
        image: person5,
        text: "\"The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.\"",
        author: 'Alex Nguyen',
        position: 'Marketing Consultant, Maverick Marketing',
    },
]

export const questions: Question[] = [
    {
        id: 1,
        question: "What types of membership plans does Cowork offer?",
        answer: "Cowork offers a variety of membership plans to suit your needs. Our plans include flexible hot-desking, dedicated desks, private offices, and virtual office services. Each plan is designed to provide the perfect balance of privacy, collaboration, and convenience."
    },
    {
        id: 2,
        question: "How does Cowork ensure transparent pricing?",
        answer: "At Cowork, we believe in transparent pricing with no hidden fees. All our plans include clear pricing structures, with detailed breakdowns of costs. You'll always know exactly what you're paying for, and there are no surprise charges."
    },
    {
        id: 3,
        question: "Can I take a virtual tour of the Cowork space before committing?",
        answer: "Absolutely! We offer a comprehensive virtual tour of our workspace, allowing you to explore the environment and amenities from the comfort of your own home. Simply visit our website and click on the \"Explore Spaces\" button to start your tour."
    },
    {
        id: 4,
        question: "What kind of community and networking opportunities does Cowork provide?",
        answer: "Cowork fosters a vibrant community through various events, workshops, and networking opportunities. Whether it's industry-specific meetups, social events, or professional development workshops, you'll have plenty of chances to connect and collaborate with other members."
    },
    {
        id: 5,
        question: "What are the COVID-19 safety measures in place at Cowork?",
        answer: "The safety of our members is our top priority. Cowork has implemented comprehensive COVID-19 safety measures, including regular sanitization, social distancing protocols, and contactless entry. We also provide PPE and encourage all members to adhere to health guidelines to ensure a safe and healthy workspace for everyone."
    },
]

export const blogPosts: BlogPostPreview[] = [
    {
        id: 1,
        image: blog1,
        tag: 'Trending',
        read_time: 7,
        title: 'Navigating the Future: Trends in Modern Coworking Spaces',
    },
    {
        id: 2,
        image: blog2,
        tag: 'Productivity',
        read_time: 5,
        title: 'Mastering Productivity: Tips from Cowork\'s High Achievers',
    },
    {
        id: 3,
        image: blog3,
        tag: 'Talk',
        read_time: 10,
        title: 'Tech Talk: The Backbone of Cowork\'s Seamless Experience',
    },
]

export const footerColumns: FooterColumn[] = [
    {
        id: 1,
        title: 'Explore More',
        items: [
            {
                id: 1,
                title: 'Home',
                url: '/',
            },
            {
                id: 2,
                title: 'About',
                url: '',
            },
            {
                id: 3,
                title: 'Pricing',
                url: '/pricing',
            },
            {
                id: 4,
                title: 'Blog',
                url: '',
            },
            {
                id: 5,
                title: 'Contacts',
                url: '/contact',
            }
        ]
    },
    {
        id: 2,
        title: 'Stay Connected',
        items: [
            {
                id: 1,
                title: 'Subscribe',
                url: '',
            },
            {
                id: 2,
                title: 'Member Stories',
                url: '',
            },
            {
                id: 3,
                title: 'Locations',
                url: '',
            },
            {
                id: 4,
                title: 'Write for Us',
                url: '',
            },
        ]
    },
    {
        id: 3,
        title: 'Follow Us',
        items: [
            {
                id: 1,
                title: 'Facebook',
                url: '',
            },
            {
                id: 2,
                title: 'Instagram',
                url: '',
            },
            {
                id: 3,
                title: 'X',
                url: '',
            },
            {
                id: 4,
                title: 'LinkedIn',
                url: '',
            },
            {
                id: 5,
                title: 'Youtube',
                url: '',
            },
        ]
    }
]

export const footerBottom: FooterItem[] = [
    {
        id: 1,
        title: 'Privacy Policy',
        url: '',
    },
    {
        id: 2,
        title: 'Terms of Service',
        url: '',
    },
    {
        id: 3,
        title: 'Cookies Settings',
        url: '',
    },
]

export const priceCards: PriceCard[] = [
    {
        id: 1,
        title: "Hot Desk",
        isPopular: false,
        text: "For the ultimate in flexibility, go with a hot desk.",
        price: 29,
        afterText: "Pause or cancel anytime",
        advantages: [
            "✓  Access to any available hot desk",
            "✓  Fast Wi-Fi and utilities included",
            "✓  24/7 entry with keycard access",
            "✓  Use of common areas and amenities",
        ],
        tags: ["Coffee", "Tea", "Water"],
        buttonText: "Subscribe Now",
    },
    {
        id: 2,
        title: "Dedicated Desk",
        isPopular: true,
        text: "Claim your own dedicated workspace with this plan.",
        price: 199,
        afterText: "Pause or cancel anytime",
        advantages: [
            "✓  Your own reserved desk",
            "✓  Lockable file cabinet",
            "✓  2 Day Office credits per month",
            "✓  All Hot Desk plan benefits and freebies",
        ],
        tags: ["Printing", "Copying", "Weekly Cleaning"],
        buttonText: "Subscribe Now",
    },
    {
        id: 3,
        title: "Private Office",
        isPopular: false,
        text: "Professional private offices for maximum privacy and quiet.",
        subtext: "Starting at",
        price: 499,
        afterText: "Pause or cancel anytime",
        advantages: [
            "✓  Private furnished office with standing desk",
            "✓  24/7 access",
            "✓  4 Day Office credits per month",
            "✓  Mail and package service",
            "✓  All Dedicated Desk plan benefits and freebies",
        ],
        tags: ["Monthly Parking Pass"],
        buttonText: "Subscribe Now",
    },
]

export const addOnCard: AddOnCard[] = [
    {
        id: 1,
        title: "Day Office",
        text: "Rent a private office for just the day",
        price: 25,
        subtext: "maximum 15 days/month",
        buttonText: "Add to Your Subscription",
        disclaimer: "Require minimum Hot Desk subscription",
    },
    {
        id: 2,
        title: "Conference Room",
        text: "Book rooms for meetings or presentations",
        price: 35,
        period: "hr",
        subtext: "24-hour cancellation required",
        buttonText: "Add to Your Subscription",
        disclaimer: "Require minimum Hot Desk subscription",
    },
    {
        id: 3,
        title: "Dedicated Desk Assistant",
        text: "Get support from a dedicated assistant",
        price: 99,
        period: "mo",
        subtext: "Pause or cancel anytime",
        buttonText: "Add to Your Subscription",
        disclaimer: "Require minimum Dedicated Desk subscription",
    },
]