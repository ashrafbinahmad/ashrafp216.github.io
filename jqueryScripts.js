

$("#aboutbtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#Lecturers").offset().top
    }, 2000);
    return false;
});

$('#submit').click(function (event) {
    event.preventDefault();
    var emailInput = $('#email_input').val()
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var isValid = regex.test(emailInput);
    if (isValid) console.log(emailInput)
    else {
        alert("invalid email")
        console.log(emailInput)
        return;
    }
    SaveToDb(emailInput, "emails", () => {
        alert('Thank you for subscribing')
        $('#email_input').val('')
    });

})


$('emailInput').click((event) => {
    event.target.attr("placeholder", "Type a name (Lastname, Firstname)");
})