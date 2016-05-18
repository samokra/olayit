var loggedIn = true; 



if (loggedIn === false) {

	window.location.replace("./login.html");

}


$(document).ready(function () {

		var users = []

	    $.ajax({url: "http://ec2-54-187-183-27.us-west-2.compute.amazonaws.com:8080/olayit_api/Users", success: function(result){
	    
	    	users = result; 
	    	console.log(users);
	    
	    }})
	    
	    
	    
	

});
