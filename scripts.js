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

screen.width

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 80,
    centeredSlides: true,

    draggable: true,
    loop: false,
    keyboard: {
        enabled: true,
    },


    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }, breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,

        },
        1276: {
            slidesPerView: 2,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                slideShadows: false,
            },
        },
    }
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

function AutoPrepent_0(num) {
    if (num.toString().length = 1) {
        return '0' + num.toString()
    } else return num.toString()
}



function ScrollRight() {

    document.getElementById("events-container").scrollLeft += 800;
}
function ScrollLeft() {

    document.getElementById("events-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('events-container').scrollLeft = e.target.offsetLeft
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
    // console.log(data.events)
    return {
        events: data.events
    }
}
function ShowMessage(message) {
    let messageSpace = document.getElementById('messageSpace')
    let messageSpace_parent = document.getElementById('messageSpace_parent')
    messageSpace.innerText = message
    messageSpace_parent.style.top = '2rem'
    setTimeout(() => {
        messageSpace_parent.style.top = '-5rem'
    }, 5000)
}
function ul(index) {
	var underlines = document.querySelectorAll(".Myunderline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}

function AboutusBtn_click(action, event) {
    action()
    // document.getElementById('ld').offsetTop
    
    window.scrollTo({top: event.target.offsetBottom, behavior: "smooth"})
    // window.scrollY()
}