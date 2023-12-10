const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    //whenever any new task is included it should save it into the local storage by calling saveData() function.
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //whenever any changes made (checked and unchecked) it should be updated in the local storage.
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //whenever any changes made it should be updated in the local storage.
        saveData();
    }
}, false);

//Data is stored in the local storage of out browser

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//to display the data whenever a website is opened or browsed.

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

//function call
showTask();
