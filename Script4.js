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
	//I will use this next console log to pull out the name of the third book in my JSON object
	//I expect the console log to show 'steveJobs', because that is what the third book is called
	
	//Message: TypeError: bookList.name is undefined. Hmmm..
	//Just went over that part of the video again. Realized what I did wrong. This should work
	
	console.log(bookList.myBooks[2].name);
	
	//And it did! Now even though I'm done and I should sleep, I'll pull out the author of the first book using a div
	//Y'know, for kicks
	//I should see 'Tolkein' on my page
	
	var bookDiv = $("<div>");
	$(bookDiv).html(bookList.myBooks[0].author);
	$("#Main").append(bookDiv); 
	
	//Two typos, one missed semicolon and one missed hashtag later, there it is!

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
