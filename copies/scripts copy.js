gsap.registerPlugin(Flip);
AOS.init();
const firebaseConfig = {
    apiKey: "AIzaSyBcXNbJFY2KNxt4DXi-fIrJuyU7ksH8-ak",
    authDomain: "iefwebsite.firebaseapp.com",
    databaseURL: "https://iefwebsite-default-rtdb.firebaseio.com",
    projectId: "iefwebsite",
    storageBucket: "iefwebsite.appspot.com",
    messagingSenderId: "1005055631588",
    appId: "1:1005055631588:web:3324c5f4f8470c5258ccf1",
    measurementId: "G-YJREGCGRLK"
};


firebase.initializeApp(firebaseConfig);


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

function SaveToDb(data, ref, action) {
    firebase.database().ref(ref).push(data).then(action);
}

var nav = document.getElementById('nav');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 150) {
        nav.classList.add('nav-normal')
        nav.classList.remove('nav-scrolled')
    } else {
        nav.classList.add('nav-scrolled')
        nav.classList.remove('nav-normal')

    }
});




function ScrollRight() {

    document.getElementById("events-container").scrollLeft += 800;
}
function ScrollLeft() {

    document.getElementById("events-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('events-container').scrollLeft = e.target.offsetLeft
}

function ToggleShowMoreInfo() {
    var id = 'more_info'
    var el = document.getElementById(id)
    var toggle_btn = document.getElementById('btn-toggle')

    if (!el.classList.contains('info')) {
        // if showing more info
        el.classList.replace('info-hidden', 'info')
        toggle_btn.classList.replace('info-off', 'info-on')
    } else {
        // if not showing more info
        el.classList.replace('info', 'info-hidden')
        toggle_btn.classList.replace('info-on', 'info-off')
    }
}

function setup() {
    return {
        activeTab: 0,
        tabs: data.tabs
    };
};

function menuData() {
    return {
        show_menu: false,
        items: data.menu_items
    }

}

function lecturers_data() {
    console.log(data.lecturers)
    return {
        lecturers: data.lecturers
    }
}   

function eventsData() {
    console.log(data.events)
    return {
        events: data.events
    }
}
function ShowMessage(message) {
    let messageSpace = document.getElementById('messageSpace')
    let messageSpace_parent = document.getElementById('messageSpace_parent')
    messageSpace.innerText = message
    messageSpace_parent.style.top = '2rem'
    setTimeout(()=>{
        messageSpace_parent.style.top = '-5rem' 
    },5000)
}
