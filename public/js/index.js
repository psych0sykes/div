$("#logInButton").click(function(){
    // Collect user credentials from form
    var logInEmail = $("#logInEmail").val();
    var logInPassword = $("#logInPassword").val();
    console.log("logging in...");
    // Check db for user email
    $.ajax("/api/get/div", function(data){
        console.log(data);
    })
});

$("#signUpButton").click(function(){
    // Collect user credentials from form
    var signUpEmail = $("#signUpEmail").val();
    var signUpPassword = $("#signUpPassword").val();
    var signUpFirstName = $("#signUpFirstName").val();
    var signUpLastName = $("#signUpLastName").val();
    console.log("signing up...");

    // Check db for user email; if exists
    // $.ajax("/api/get/div", function(data){
    //     console.log(data);
    // })
    var newUser = {
        userName: signUpEmail,
        password: signUpPassword,
        firstName: signUpFirstName,
        lastName: signUpLastName
    }
    // If not present in db, POST new user
    $.post("/api/post/div", newUser)
});

