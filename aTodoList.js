document.getElementById('clickforAdd').addEventListener('click', addList)

function handleEnter(event) {
    if (event.key === 'Enter') {
        addList()
    }
}


function addList() {
    var myInput = document.getElementsByClassName('mytodoList')[0]
    var inputText = myInput.value

    if (inputText !== "") {  //ตรวจสอบว่าต้องมีข้อความถึงจะเพิ่ม List ได้
        var input = document.createTextNode(inputText)
        var list = document.createElement('li')
        var unOrderList = document.getElementById('list-container')
        var btnSubtract = document.createElement('button') //สร้างปุ่มกากบาท
        btnSubtract.innerHTML = '\u2716'  //ใส่สัญลักษณ์กากบาท

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