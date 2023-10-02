document.getElementById('clickforAdd').addEventListener('click', addList)



function addList() {
    var myInput = document.getElementsByClassName('mytodoList')[0].value
    var input = document.createTextNode(myInput)
    var list = document.createElement('li')
    var unOrderList = document.getElementById('list-container')
    list.appendChild(input)
    unOrderList.appendChild(list)
}