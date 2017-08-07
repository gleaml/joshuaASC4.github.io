//Set database object
//allows us to access the database we just created
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var newName = $("#name").val();
    var newMessage = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    //must replace + be an object
    //you must send an object to the database or else it will be an error
    var value = {name:newName, message:newMessage};
    database.push(value);
}

database.on("child_added", function(rowData){
    console.log(rowData.val());
    var name = rowData.val().name;
    var message= rowData.val().message;
    // Create an html element to concatenate variable with the html tags
    var html_el = "<p>" + name + " : " + message + "<p>";
    $(".allMessages").append(html_el);
});