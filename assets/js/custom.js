var loggedIn = true; 
var url = "http://ec2-54-187-183-27.us-west-2.compute.amazonaws.com:8080/olayit_api";


if (loggedIn === false) {

	window.location.replace("./login.html");

}


$(document).ready(function () {

		var users = []

	    $.ajax({url: url+"/Users", success: function(result){
	    	users = result; 
	    	console.log(users);
	    
	    }})
	    
	    
	    
	

});
