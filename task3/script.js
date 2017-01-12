
$(function () {
    $('#former').submit(function () {
        // event.stopPropagation();
        if($(this).valid()) {
            // event.preventDefault();
            addRow();
        }
    });
});
//functiom that add rows for getelementbyid
function addRow() {
  //getelements by id         
  var myName = document.getElementById("name");
  var age = document.getElementById("age");
  var sex = document.getElementById("sex");
  var date = document.getElementById("date");
  var adress = document.getElementById("adress");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var table = document.getElementById("myTableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
   
  row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(1).innerHTML= myName.value;
  row.insertCell(2).innerHTML= age.value;
  row.insertCell(3).innerHTML = sex.value;
  row.insertCell(4).innerHTML = date.value;
  row.insertCell(5).innerHTML = adress.value;
  row.insertCell(6).innerHTML = phone.value;
  row.insertCell(7).innerHTML = email.value;

   
}
//delete row by button 
function deleteRow(obj) {
      
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
    
}
//add table
function addTable() {
  //
  var myTableDiv = document.getElementById("myTableData");
      
  var table = document.createElement('TABLE');
  table.border='1';
    
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
      
  for (var i=0; i<7; i++){
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
       
    for (var j=0; j<4; j++){
      var td = document.createElement('TD');
      td.width='75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
      }
  }
  
  myTableDiv.appendChild(table);
    
}


