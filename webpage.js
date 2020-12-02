

// Here we're pulling the last used password from local storage!
var passwordInput = localStorage.getItem("password", passwordInput)


document.getElementById("lastPassword").innerHTML = localStorage.getItem("password", passwordInput);


$("#signIn").click(function (event) {
    event.preventDefault();


    var emailInput = $("#stacked-email").val();
    var passwordInput = $("#stacked-password").val();

    //setting the email and password!

    localStorage.setItem("email", emailInput);
    localStorage.setItem("password", passwordInput);


})



