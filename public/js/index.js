$("#logInButton").click(function(){
    // Collect user credentials from form
    var logInEmail = $("#logInEmail").val();
    var logInPassword = $("#logInPassword").val();
    console.log("logging in...");
    // Check db for user email
    $.get("/api/get/div/" + logInEmail, function(data){
        console.log(data);
    })
});

$("#signUpButton").click(function(){
    // Collect user credentials from form
    var signUpEmail = $("#signUpEmail").val();
    var signUpPassword = $("#signUpPassword").val();
    var signUpFirstName = $("#signUpFirstName").val();
    var signUpLastName = $("#signUpLastName").val();
    var newUser = {
        userName: signUpEmail,
        password: signUpPassword,
        firstName: signUpFirstName,
        lastName: signUpLastName
    };
    var existUser = [];
    // Check db for user email; if exists
    function checkForUser(cb) { $.get("/api/get/div/" + newUser.userName, function(data){
        console.log(data);
        existUser = data;
        cb(existUser)
    });
    };

    checkForUser(function(existUser){
    if (existUser.length > 0) {
        alert("email already in use!")
    } else {
        $.post("/api/post/div", newUser)
        // log in
        // function to load div edit page
    };
    });
});

