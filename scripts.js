gsap.registerPlugin(Flip);

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

    document.getElementById("initiatives-container").scrollLeft += 800;
}
function ScrollLeft() {

    document.getElementById("initiatives-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('initiatives-container').scrollLeft = e.target.offsetLeft
}

function ToggleShowMoreInfo(id) {
    var el = document.getElementById(id)
    if (!el.classList.contains('info')) {
        el.classList.replace('info-hidden', 'info')
    } else {
        el.classList.replace('info', 'info-hidden')
    }
}

function setup() {
    return {
      activeTab: 0,
      tabs: [
          "About",
          "Program Structure",
          "Student life",
          "Placement and Career",
      ]
    };
  };

