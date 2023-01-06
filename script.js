let btn = document.getElementById("add_fish");
function addFish(){
    let new_p = document.createElement('p');
    let fishes = document.getElementById("fishes");
    new_p.appendChild(document.createTextNode('Добавили рыбку'));
    fishes.appendChild(new_p);
}
btn.addEventListener("click", addFish);