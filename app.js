

var list = document.getElementById("list")



function addTodo(){

// create li tag with text node

var todo_item = document.getElementById("todo-item")
var li = document.createElement("li")
var liText = document.createTextNode(todo_item.value)
li.setAttribute("class","text")

li.appendChild(liText)

// create delete button

var deleteButton = document.createElement("button")
var delText = document.createTextNode("Delete")
deleteButton.appendChild(delText)
li.appendChild(deleteButton)
deleteButton.setAttribute("class","btn")
deleteButton.setAttribute("onclick","deleteItem(this)")


// create edit button

var editButton = document.createElement("button")
var editText = document.createTextNode("Edit")
editButton.appendChild(editText)
li.appendChild(editButton)
editButton.setAttribute("class","btn")
editButton.setAttribute("onclick","editItem(this)")



list.setAttribute("class","list")

list.appendChild(li)
todo_item.value= ""

document.getElementById("todo-item").focus();

}


function deleteItem(e){

console.log(e.parentNode)
e.parentNode.remove()
}


function deleteAll()  {
document.getElementById(list)
// list.remove()
list.innerHTML= ""


}


function editItem(e)   {


// var input = prompt(li.)    
// console.log(e.parentNode.childNodes[0])
// var val = e.parentNode.firstChild.nodeValue
var  editValue = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)

if (editValue === null) {
        return; //break out of the function early
}

if (editValue === '') {
    editValue = prompt("Please enter some value")
    e.parentNode.firstChild.nodeValue = editValue
}

e.parentNode.firstChild.nodeValue = editValue

// e.parentNode.firstChild.nodeValue ="Ghouse"
console.log(e.parentNode.firstChild)




}