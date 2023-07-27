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

    nav_dropdown_shop:[
        'CART',
        'CHECK OUT',
        'OUR OFFERS',
    ],

    slides : [
        {
            image: '../src/assets/img/01.jpg',
            Name: 'John Doe',
            role:'Designer',
            text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate tempora minima consequuntur, omnis voluptas sequi quaerat sint. Sit, animi.',
        }, {
            image: '../src/assets/img/03.jpg',
            Name: 'Turbato Thomas',
            role:'CEO',
            text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil distinctio exercitationem quod officiis eos? Quis nulla quia ad tempore ipsum aspernatur enim.',
        }, {
            image: '../src/assets/img/02.jpg',
            Name: 'Lucy Jonson',
            role:'Scenography',
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil distinctio exercitationem quod officiis eos? Quis nulla aspernatur enim exercitationem quod officiis eos?",
        },
    ],

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