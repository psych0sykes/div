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