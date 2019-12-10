

$(document).ready(function(){
// Login Status
    if(sessionStorage.getItem("userId") > 0) {
        $("#navLogin").text("sign out")
    };



    var localUserId = sessionStorage.getItem("userId");
    // get user div color
    if(localUserId > 0){
    $.get("api/get/divcolor/" + localUserId, function(data){
        var color= data[0].divColor_1;
        var userName = data[0].userName;
        console.log(color);
        $("#colorInput").val(color);
        $("#userDiv").attr("style","background-color:" + color + ";");
    });
  };
});

$("#saveUserDivButton").click(function(){
    var localUserId = sessionStorage.getItem("userId");
    var newColor = $("#colorInput").val();
    console.log(newColor);
    var request = {
        divColor_1: newColor
    }
    console.log(localUserId);

        $.post("api/post/divcolor_1/" + localUserId, request);
        $("#userDiv").attr("style","background-color:" + newColor + ";");
    
});

$("#navYourDiv").click(function(event) {
    event.preventDefault()
// ===== for debugging
    // sessionStorage.setItem("userId",1)
// =====
    var localUserId = sessionStorage.getItem("userId");
    if(localUserId > 0){
        console.log("true")
        window.location.replace("/yourdiv");
    } else {
        window.location.replace("/auth/signin");
    }
});

$("#navLogin").click(function(event){
    if(sessionStorage.getItem("userId") > 0) {
        event.preventDefault()
        sessionStorage.clear();
        window.location.replace("/");
    }
})

$("#logInButton").click(function(){
    // Collect user credentials from form
    var logInEmail = $("#logInEmail").val();
    var logInPassword = $("#logInPassword").val();
    console.log("logging in...");
    // Check db for user email
    $.get("/api/auth/up/" + logInEmail + "/" + logInPassword, function(data){
        console.log(data.length);
        if(data.length === 0) {
            $("#invalidNote").text("pls try again")
        } else {
            sessionStorage.setItem("userId",data[0].id);
            console.log(data[0].id);
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
        cb(existUser, newUser)
    });
    };

    checkForUser(function(existUser, newUser){
    if (existUser.length > 0) {
        alert("email already in use!")
    } else {
        $.post("/api/post/div", newUser)
        $.get("/api/auth/up/" + newUser.userName + "/" + newUser.password, function(data){
        sessionStorage.setItem("userId",data[0].id);
        window.location.replace("/yourdiv");
        });
    };
    });
});

