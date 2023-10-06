document.getElementById('clickforAdd').addEventListener('click', addList)

function handleEnter(event) {
    if (event.key === 'Enter') {
        addList()
    }
}


function addList() {
    var myInput = document.getElementsByClassName('mytodoList')[0]
    var inputText = myInput.value


    if (inputText !== "") {
        var listItem = document.createElement('li')
        var listContainer = document.getElementById('list-container')
        var input = document.createTextNode(inputText)
        var removeButton = document.createElement('button')
        removeButton.innerHTML = '\u2716'


        localStorage.setItem("myList", inputText)



        listItem.appendChild(input)
        listItem.appendChild(removeButton)
        listContainer.appendChild(listItem)
        myInput.value = ""
    }

    removeButton.addEventListener('click', removeList)
    function removeList() {
        listItem.remove()
    }
}