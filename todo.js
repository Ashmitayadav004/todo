let todo = [];
let req = prompt("Enter the task you want to do : ");
console.log(req);
while (true) {
    if (req == "quit") {
        console.log("You are quitting the todo !!!!!!!");
        break;

    }

    else if (req == "list") {
        console.log("__________________________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("__________________________");
    }
    else if (req == "add") {
        let task = prompt("Enter the task you want to add ");
        todo.push(task);
        console.log("Task added.");
        
    }
    else if (req == "delete") {
        let indx = prompt("Enetr the task You want to delete:");
        todo.splice(indx, 1);
        console.log("Task deleted.");
    }
    req = prompt("Enter the task you want to do");
}