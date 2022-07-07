var nav = document.getElementById('nav'); // Identify target
var nav

window.addEventListener('scroll', function (event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) { // Just an example
        // nav.style.backgroundColor = 'transparent'; // or default color
        nav.classList.add('nav-normal')
        nav.classList.remove('nav-scrolled')
    } else {
        // nav.style.backgroundColor = 'color'
        nav.classList.add('nav-scrolled')
        nav.classList.remove('nav-normal')

    }
});

// var head = document.getElementById('head')
// function workOnLoad() {
//     head.style.height = '800px'
//     document.getElementById('section-after-head').style.marginTop = head.style.height

// }

function ScrollRight() {

    document.getElementById("initiatives-container").scrollLeft += 800;
}
function ScrollLeft() {

    document.getElementById("initiatives-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('initiatives-container').scrollLeft = e.target.offsetLeft
}
function ShowMoreInfo(id) {
    var currentEl = document.getElementById(id)
    if (!currentEl.classList.contains('Showing-More-Info')) {
        currentEl.classList.replace('Btn-Show-More-Info','Showing-More-Info')
    }  else {
        MoreInfo.classList.remove()
    }

}
function CloseShowMoreInfo(id) {
    var MoreInfo = document.getElementById(id);
    if (MoreInfo.classList.contains('Showing-More-Info')) {
        MoreInfo.classList.add('Btn-Show-More-Info')
        MoreInfo.classList.remove()
    }
}