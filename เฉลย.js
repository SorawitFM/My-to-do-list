document.getElementById('clickforAdd').addEventListener('click', addList);

// โหลดข้อมูลจาก Local Storage เมื่อหน้าเว็บโหลดใหม่
window.addEventListener('load', loadListFromLocalStorage);

function loadListFromLocalStorage() {
    var existingData = localStorage.getItem('List') || ''; // ดึงข้อมูลจาก Local Storage หรือเริ่มต้นด้วยข้อมูลว่าง
    var listItems = existingData.split('\n'); // แยกข้อมูลในรูปแบบของบรรทัดแยกกัน (\n)

    var unOrderList = document.getElementById('list-container');
    unOrderList.innerHTML = ''; // เคลียร์รายการทั้งหมดในรายการเดิม

    for (var i = 0; i < listItems.length; i++) {
        var inputText = listItems[i].trim(); // ตัดช่องว่างที่อาจมีอยู่ในข้อมูล
        if (inputText !== "") {
            var input = document.createTextNode(inputText);
            var list = document.createElement('li');
            var btnSubtract = document.createElement('button');
            btnSubtract.innerHTML = '\u2716';

            list.appendChild(input);
            list.appendChild(btnSubtract);
            unOrderList.appendChild(list);

            btnSubtract.addEventListener('click', removeList);
        }
    }
}

function addList() {
    var myInput = document.getElementsByClassName('mytodoList')[0];
    var inputText = myInput.value;

    if (inputText !== "") {
        var input = document.createTextNode(inputText);
        var list = document.createElement('li');
        var unOrderList = document.getElementById('list-container');
        var btnSubtract = document.createElement('button');
        btnSubtract.innerHTML = '\u2716';

        list.appendChild(input);
        list.appendChild(btnSubtract);
        unOrderList.appendChild(list);
        myInput.value = "";

        // เพิ่มข้อมูลลงใน Local Storage
        var existingData = localStorage.getItem('List') || '';
        existingData += inputText + '\n';
        localStorage.setItem('List', existingData);

        btnSubtract.addEventListener('click', removeList);
    }
}

function removeList() {
    var listItem = this.parentNode;
    var inputText = listItem.firstChild.textContent;
    var existingData = localStorage.getItem('List') || '';

    // ลบข้อมูลจาก Local Storage โดยการแทนที่ข้อมูลเดิมด้วยข้อมูลใหม่ที่ไม่มีรายการที่ต้องการลบ
    existingData = existingData.replace(inputText + '\n', '');
    localStorage.setItem('List', existingData);

    listItem.remove();
}