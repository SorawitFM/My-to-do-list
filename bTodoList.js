document.getElementById('clickforAdd').addEventListener('click', addList)
window.addEventListener('load', loadListFromLocalStorage)

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

        listItem.appendChild(input)
        listItem.appendChild(removeButton)
        listContainer.appendChild(listItem)
        myInput.value = ""

        var ListInStorage = localStorage.getItem('List') || ''
        ListInStorage += inputText + '\n'
        localStorage.setItem('List', ListInStorage)
        removeButton.addEventListener('click', removeList)
    }



}

function loadListFromLocalStorage() {
    var ListInStorage = localStorage.getItem('List') || ''
    var listfromStorage = ListInStorage.split('\n')

    var listContainer = document.getElementById('list-container')
    listContainer.innerHTML = ''

    for (var i = 0; i < listfromStorage.length; i++) {
        var inputText = listfromStorage[i].trim();
        if (inputText !== "") {
            var input = document.createTextNode(inputText)
            var listItem = document.createElement('li')
            var removeButton = document.createElement('button')
            removeButton.innerHTML = '\u2716'

            listItem.appendChild(input)
            listItem.appendChild(removeButton)
            listContainer.appendChild(listItem)



            removeButton.addEventListener('click', removeList)
        }

    }
}
function removeList() {
    var listItem = this.parentNode
    var inputText = listItem.firstChild.textContent
    var ListInStorage = localStorage.getItem('List') || ''
    ListInStorage = ListInStorage.replace(inputText + '\n', '')
    localStorage.setItem('List', ListInStorage)
    listItem.remove()
}