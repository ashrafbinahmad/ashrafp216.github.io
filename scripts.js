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

function ScrollRight() {

    document.getElementById("initiatives-container").scrollLeft += 800;
} 
function ScrollLeft() {

    document.getElementById("initiatives-container").scrollLeft -= 800;
}
function scrollToView(e) {
    document.getElementById('initiatives-container').scrollLeft  = e.target.offsetLeft
}