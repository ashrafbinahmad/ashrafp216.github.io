

$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#Lecturers").offset().top
    }, 2000);
    return false;
});
$(".swiper-slide-next").click(()=> {
    swiper.slidePrev(speed, runCallbacks)
})


function submitForm(event) {
    event.preventDefault();
    let myForm = document.getElementById("subscribe_form");
    let email = document.getElementById("email_input").value;
    console.log(email)
    let emailModel = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailModel.test(email)) {
        ShowMessage('Invalide email. Please check your input')
        return;
    }
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            ShowMessage("Thank you for subscribing to our news letter.You will get event notifications to your email: "+ email)
            document.getElementById("email_input").value = null;
        })
        .catch((error) => ShowMessage(error));
}

$('emailInput').click((event) => {
    event.target.attr("placeholder", "Type a name (Lastname, Firstname)");
})


