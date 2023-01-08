let btn = document.getElementById("add_fish");



const createOption = value => {
  const $option = document.createElement('option');
  $option.textContent = value;
  $option.value = value;
  return $option;
};

let date = document.getElementById("date");
var f_types = ["Сельдь", "Скумбрия", "Форель", "Кета", "Горбуша"];

function addFish(){
    let tr = document.createElement('tr');
    tr.classList.add("fish_type");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.appendChild(document.createTextNode('Вид сырья:'));
    let val;  
    var select = document.createElement('select');
    for (val of f_types)
    {
        option = createOption(val);
        select.appendChild(option);
    }
    td2.appendChild(select);
    tr.appendChild(td1);
    tr.appendChild(td2);
    date.parentNode.insertBefore(tr,date);
    
}
function fishWeight(){
    let tr2 = document.createElement("tr");
    tr2.classList.add("fish_weight");
    let td12 = document.createElement('td');
    let td22 = document.createElement('td');
    td12.appendChild(document.createTextNode("Вес:"));
    td22.appendChild(document.createElement("input"));
    tr2.appendChild(td12);
    tr2.appendChild(td22);
    date.parentNode.insertBefore(tr2,date);
    
}

function number(){
    let tr3 = document.createElement("tr");
    tr3.classList.add('number')
    let td13 = document.createElement('td');
    let td23 = document.createElement('td');
    td13.appendChild(document.createTextNode("Номер партии:"));
    td23.appendChild(document.createElement("input"));
    tr3.appendChild(td13);
    tr3.appendChild(td23);

    date.parentNode.insertBefore(tr3,date);


}

function addItem(){
    number();
    addFish();
    fishWeight();

    
    
}
btn.addEventListener("click", addItem);