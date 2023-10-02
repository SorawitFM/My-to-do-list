document.getElementsById('clickforAdd').addEventListener('click', addList)

var myInput = document.getElementsByClassName('mytodoList')

function addList() {
    var list = document.createElement('li')
    var unOrderList = document.getElementById('list-container')
    var input = document.createTextNode(myInput)

    list.appendChild(input)
    unOrderList.appendChild(list)
}