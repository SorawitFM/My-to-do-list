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
        var input = document.createTextNode(inputText)
        var list = document.createElement('li')
        var unOrderList = document.getElementById('list-container')
        var btnSubtract = document.createElement('button')
        btnSubtract.innerHTML = '\u2716'
        list.appendChild(input)
        list.appendChild(btnSubtract)
        unOrderList.appendChild(list)
        myInput.value = ""
    }
    btnSubtract.addEventListener('click', removeList)
    function removeList() {
        list.remove()
    }
}