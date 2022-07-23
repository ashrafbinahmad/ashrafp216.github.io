

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
        return;
    }
    SaveToDb(emailInput, "emails");
    alert('Thank you for subscribing')

})

$("#glogin").click(() => {
    const googleAuth =
        new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuth).then((result) =>alert(result.email));
})