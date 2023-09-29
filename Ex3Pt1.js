//(a)
let rossArray = ["hello", "bye"]; // array with 2

//(b) addtask 
let addTask = (task)=>{ // recieves a string as a paramater called tas
    let length = rossArray.push(task); // it adds task to array
    console.log("Task: " +task+ " added to tasks.");
    return length;

}

//(c) list all task
let listsAllTasks = ()=>{ 
    rossArray.forEach((task)=>{ // iterates over all of the array
        console.log(task);
    })
}//(d) delete task
let deleteTask = (task)=>{
    let index = rossArray.indexOf(task);
    if(index > -1){
        rossArray.splice(index,1); // removes the string from the array 
        console.log("Task: " + task + " has been deleted"); // deleted
    } else {
        console.log("Task: " + task + " not in array"); // not in array
    }
    
    //return length; // return length after deletion
}

addTask("Testing");// adding to array
addTask("Learn React");
listsAllTasks(); // listing all the tasks 
deleteTask("Testing"); // deleting tasks
deleteTask("hello"); // deleting hardcoded array


console.log(rossArray); // prints out array
console.log(rossArray.length); // shows length of array