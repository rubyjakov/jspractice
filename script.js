//task1
a.style.borderRadius = "50%";
a.style.height = '200px';
a.style.width = '200px';
a.style.border = '5px solid yellow';
a.style.backgroundImage = 'linear-gradient(90deg,red, yellow)';



//task2
document.getElementsByClassName('card')[0].style.border = "5px solid yellow";
document.getElementsByClassName('card')[0].style.backgroundColor = 'red'
const nodeUl = document.createElement("ul");
nodeUl.innerHTML = '<li>Ruby</li><li>Jakov</li> <li>26</li><li>Netanya</li>'
b.appendChild(nodeUl);


//task3

const data = {
    title: "car",
    price: 200_000,
    hand: 2,
    km: 100_403,
    year: 2014
}

const details = document.createElement('p');

const title = document.createElement('p')
title.innerHTML = 'title: ' + data.title;
details.appendChild(title);

const price = document.createElement('p')
price.innerHTML = 'price: ' + data.price;
details.appendChild(price);

const hand = document.createElement('p')
hand.innerHTML = 'hand: ' + data.hand;
details.appendChild(hand);

const km = document.createElement('p')
km.innerHTML = 'km: ' + data.km;
details.appendChild(km);

const year = document.createElement('p')
year.innerHTML = 'year: ' + data.year;
details.appendChild(year);
cc.appendChild(details);

//task4
d.classList.add("bg-danger");






