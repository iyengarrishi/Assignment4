/**
 * @author Rishi Iyengar
 */

var test= "This is assignment 4"

console.log(test);

//Here I begin assignment 4B

// I created a JSON file out of my list from assignment 3 and named it bookList.json
//Hopefully you'll see it here soon.

//Now that jQuery has been loaded, I will create a $(document).ready function

//Now I will create a function within document ready, and call it bookSort

function moveToHTML(bookList){
	
	console.log(bookList);
	
}

function bookSort(){
	
	console.log ("If I did everything right, I will see this.")
	
	//Creating a div using jQuery, let's call it divDiv 
	// $ is the operator used to indicate jQuery
	
	var divDiv = $("<div>");
	$(divDiv).html("I don't know why I div that");
	//in order to make it show on the html page, I will now pull the div id from there and append it
	$("#Main").append(divDiv);
	
	//Success! Forgot to append initially but fixed it
	//Now to use .get to retrieve the JSON I created earlier
	//Three parameters - Name of file, function to pass the data to, data format
	
	$.get("bookList.json", moveToHTML, "json")
	
	//We need to first define the function moveToHTML, and create it outside the first function
	//Because, well, it has to be defined before we can use it. 

} 
$(document).ready(bookSort);  
