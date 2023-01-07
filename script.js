let btn = document.getElementById("add_fish");



const createOption = value => {
  const $option = document.createElement('option');
  $option.textContent = value;
  $option.value = value;
  return $option;
};


var f_types = ["Сельдь", "Скумбрия", "Форель", "Кета", "Горбуша"];

function addFish(){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.appendChild(document.createTextNode('Вид сырья:'));
    let val;  
    var $select = document.createElement('select');
    for (val of f_types);
    {
    $option = createOption(val);
    $select.appendChild($option);
    }
    td2.appendChild($select);
    tr.appendChild(td1);
    tr.appendChild(td2);
    let last_fish = document.getElementsByClassName('fish_type')[0];
    last_fish.parentNode.insertBefore(tr, last_fish.nextSibling);
    
}
function fishWeight(){
    let tr2 = document.createElement("tr");
    let td12 = document.createElement('td');
    let td22 = document.createElement('td');
    td12.appendChild(document.createTextNode("Вес:"));
    td22.appendChild(document.createElement("input"));
    tr2.appendChild(td12);
    tr2.appendChild(td22);
    let last_fish = document.getElementsByClassName('fish_weight')[0];
    last_fish.parentNode.insertBefore(tr2, last_fish.nextSibling);
}

function number(){
    let tr3 = document.createElement("tr");
    let td13 = document.createElement('td');
    let td23 = document.createElement('td');
    td13.appendChild(document.createTextNode("Вес:"));
    td23.appendChild(document.createElement("input"));
    tr3.appendChild(td13);
    tr3.appendChild(td23);
    let last_fish = document.getElementsByClassName('number')[0];
    last_fish.parentNode.insertBefore(tr3, last_fish.nextSibling);


}

function addItem(){
    number();
    addFish();
    fishWeight();
    
    
}
btn.addEventListener("click", addItem);