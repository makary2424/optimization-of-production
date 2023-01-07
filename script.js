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
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    td1.appendChild(document.createTextNode('Вид сырья:'));
    let val;  
    var $select = document.createElement('select');
    for (val of f_types)
    {
    $option = createOption(val);
    $select.appendChild($option);
    }
    td2.appendChild($select);
    tr.appendChild(td1);
    tr.appendChild(td2);
    let last_fish = document.getElementsByClassName('fish_weight')[0]
    last_fish.parentNode.insertBefore(tr, last_fish.nextSibling);
    
}

btn.addEventListener("click", addFish);