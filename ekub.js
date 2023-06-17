var submit = document.getElementById('submit');
submit.addEventListener("click", adddata);

var pick = document.getElementById('pick');
pick.addEventListener("click", winner);

var User = [];
var row = 1;

function adddata() {
    var Username = document.getElementById('Username').value;
    var amount = document.getElementById('amount').value;
    

    if (!Username || !amount) {
        alert("pls write anything");
        return;
    }

    var display = document.getElementById('display');
    var r = document.getElementById('display').rows.length - 1;
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    

    cell1.innerHTML = Username;
    cell2.innerHTML = amount;
    
    User[r] = Username;
 
    row++;

}

function winner() {
    var rownum = document.getElementById('display').rows.length - 1;
    if (rownum != 0) {
        let name = Math.floor(Math.random() * row) + 1;
        document.getElementById('displaywinner').innerHTML = User[name - 1];
    
    }
}