
let number = 1;


const createOption = value => {
  const $option = document.createElement('option');
  $option.textContent = value;
  $option.value = value;
  return $option;
};

let date = document.getElementById("date");
var f_types = ["Сельдь", "Скумбрия", "Форель", "Кета", "Горбуша"];


let fishTable = document.getElementById('fish')
function addItem(){
    let tr = document.createElement('tr');
    td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(number));
    td2 = document.createElement('td');
    var select = document.createElement('select');
    select.classList.add("form-control");
    for (val of f_types)
    {
        option = createOption(val);
        select.appendChild(option);
    }
    td2.appendChild(select);
    td3 = document.createElement('td');
    input = document.createElement('input')
    input.classList.add("form-control");
    td3.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    fishTable.appendChild(tr);
    number += 1;
    
}
let btn = document.getElementById("add_fish");
btn.addEventListener("click", addItem);