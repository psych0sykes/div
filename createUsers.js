
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function User (first,last,user,pass,div){
    this.firstName= first;
    this.lastName= last;
    this.username= user;
    this.password= pass;
    this.divColor_1= div
};

function createUsers(numberUsers){
    var newUsers =[];
    for(var i = 1;i < numberUsers + 1; i++){
        var newUser = new User (
            "ex" + i,
            "ex" + i,
            "ex" + i,
            "123",
            getRandomColor()
        )
        newUsers.push(newUser);
        $.post("/api/post/div", newUser);
    };
    return newUsers;
};

