import { reactive } from 'vue';

export const store = reactive({
    // searchtext:'',
    // movies:[],
    // tvSeries:[],
    // seriesThumbs:'https://image.tmdb.org/t/p/w342',
    nav_data:[
        'HOME',
        'BLOG',
        'PAGES',
        'ABOUT',
        'CONTACTS',
        'GALLERY',
        'SHOP',
    ],

    nav_dropdown:[
        'SERVICES',
        'OUR WORK FLOW',
        'VIDEO THUMBNAIL TYPE',
    ],

    // slides : [
    //     {
    //     image: '../assets/img/01.jpg',
    //         firstName: 'Marvel\'s Spiderman Miles Morale',
    //         lastName:'',
    //         text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate tempora minima consequuntur, omnis voluptas sequi quaerat sint. Sit, animi.',
    //     }, {
    //         image: '../assets/img/02.jpg',
    //         firstName: 'Ratchet & Clank: Rift Apart',
    //         lastName:'',
    //         text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate tempora minima consequuntur, omnis voluptas sequi quaerat sint. Sit, animi.',
    //     }, {
    //         image: '../assets/img/03.jpg',
    //         firstName: 'Fortnite',
    //         lastName:'',
    //         text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate tempora minima consequuntur, omnis voluptas sequi quaerat sint. Sit, animi.",
    //     },
    // ],

    contact_info:{
        address:{
            street:'2/45 Tower Street, new york',
            state:'USA'
        },
        number:'Call Us On 0800 840 1010',
        email: 'Demo@Example.com',
    },

    info_links:[
        'Product Support',
        'Checkout',
        'Report Abuse',
        'Redeem Voucher',
        'Order Status',
    ],

    useful_links:[
        'Policies & Rules',
        'Privacy Policy',
        'License Policy',
        'My Account',
        'Locality',
    ]
    
});