var localStorage = window.localStorage;

// Populate yourdiv

$(document).ready(function(){

    // get user div color
    if(localUserId > 0){
    var localUserId = localStorage.getItem("userId");
    $.get("api/get/divcolor/" + localUserId, function(data){
        var color= data.divColor_1;
        var userName = data.userName;
        console.log(color);
    });
  };
});

$("saveUserDivButton").click(function(){
    var localUserId = localStorage.getItem("userId");
    $.post("api/post/divcolor_1/" + localUserId, function(){
        console.log("...saved")
    })
})

$("#navYourDiv").click(function(event) {
    event.preventDefault()
// =====
    localStorage.setItem("userId",1)
// =====
    var localUserId = localStorage.getItem("userId");
    if(localUserId > 0){
        console.log("true")
        window.location.replace("/yourdiv");
    } else {
        window.location.replace("/auth/signin");
    }
})

$("#logInButton").click(function(){
    // Collect user credentials from form
    var logInEmail = $("#logInEmail").val();
    var logInPassword = $("#logInPassword").val();
    console.log("logging in...");
    // Check db for user email
    $.get("/api/auth/" + logInEmail + "/" + logInPassword, function(data){
        console.log(data.length);
        if(data.length === 0) {
            $("#invalidNote").text("pls try again")
        } else {
            localStorage.setItem("userId",data);
            window.location.replace("/yourdiv");
        };
    });
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
        localStorage.setItem("userId",data);
        window.location.replace("/yourdiv");
    };
    });
});

