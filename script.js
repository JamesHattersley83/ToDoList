// create empty array
var todos = [];

// ask user for input
var input = prompt("What would you like to do?");

while(input !== "quit") {
	// check if input is list
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		newToDo();
	} else if(input === "delete") {
		deleteToDo();
	}
	// ask for user input again
 	input = prompt("What would you like to do?");
}
	console.log("You quit the app!");

	function listTodos() {
		console.log("**********")
		// loop through array and log on new line
		todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
		});
		console.log("**********")
	}

	function newToDo() {
		// ask for new todo
		var newToDo = prompt("Add new ToDo");
		// add new todo to array
		todos.push(newToDo);
	}

	function deleteToDo() {
		// ask for index of array to delete
		var index = prompt("Enter index of Todo to delete");
		// splice array
		todos.splice(index,1);
		console.log("Todo removed");
	}
	
