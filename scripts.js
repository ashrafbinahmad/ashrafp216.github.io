gsap.registerPlugin(Flip);
AOS.init();

var nav = document.getElementById('nav');

window.addEventListener('scroll', function (event) {
    // event.preventDefault();

    if (window.scrollY <= 150) {
        nav.classList.add('nav-normal')
        nav.classList.remove('nav-scrolled')
    } else {
        nav.classList.add('nav-scrolled')
        nav.classList.remove('nav-normal')

    }
});




function ScrollRight() {

    document.getElementById("initiatives-container").scrollLeft += 800;
}
function ScrollLeft() {

    document.getElementById("initiatives-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('initiatives-container').scrollLeft = e.target.offsetLeft
}

function ToggleShowMoreInfo() {
    var id = 'more_info'
    var el = document.getElementById(id)
    var toggle_btn = document.getElementById('btn-toggle')
    if (!el.classList.contains('info')) {
        el.classList.replace('info-hidden', 'info')
        toggle_btn.classList.replace('info-off', 'info-on')
    } else {
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

function ScrollTo(selecter) {
    var el = document.querySelector(selecter);
    console.log(selecter)
}