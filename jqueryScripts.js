

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

// $('#submit').click(function (event) {
//     event.preventDefault();
//     var emailInput = $('#email_input').val()
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var isValid = regex.test(emailInput);
//     if (isValid) console.log(emailInput)
//     else {
//         alert("invalid email")
//         console.log(emailInput)
//         return;
//     }
//     SaveToDb(emailInput, "emails", () => {
//         alert('Thank you for subscribing')
//         $('#email_input').val('')
//     });

// })

$('emailInput').click((event) => {
    event.target.attr("placeholder", "Type a name (Lastname, Firstname)");
})


