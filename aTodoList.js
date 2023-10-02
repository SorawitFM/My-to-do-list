document.getElementById('clickforAdd').addEventListener('click', addList)



function addList() {
    var myInput = document.getElementsByClassName('mytodoList')[0]
    var inputText = myInput.value

    if (inputText !== "") {
        var input = document.createTextNode(inputText)
        var list = document.createElement('li')
        var unOrderList = document.getElementById('list-container')
        var btnSubtract = document.createElement('button')
        list.appendChild(input)
        unOrderList.appendChild(list)
        unOrderList.appendChild(btnSubtract)
        myInput.value = ""
    }

}