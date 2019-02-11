const template = document.querySelector("template").content;


fetch("http://kea-alt-del.dk/t5/api/productlist").then(e=>e.json()).then(data=>data.forEach(showData))

function showData(oneObject){
    console.log(oneObject);
    let clone = template.cloneNode(true);
    clone.querySelector("#name").textContent=oneObject.name;
    clone.querySelector("#price").textContent=oneObject.price;
    clone.querySelector("#dishpic").src="imgs/medium/" + oneObject.image + "-md.jpg";

    let main;
    if(oneObject.category=="starter"){
        main = document.querySelector("#starter");

    }
    else if(oneObject.category=="main"){
        main = document.querySelector("#mainc");

    }
    else if(oneObject.category=="dessert"){
        main = document.querySelector("#dessert");

    }
    else if(oneObject.category=="drinks"){
        main = document.querySelector("#drinks");

    }
    else if(oneObject.category=="sideorders"){
        main = document.querySelector("#sideor");

    }
    main.appendChild(clone);
}

let cat1=document.querySelector("#cat1");
let cat2=document.querySelector("#cat2");
let cat3=document.querySelector("#cat3");
let cat4=document.querySelector("#cat4");
let cat5=document.querySelector("#cat5");
let starter=document.querySelector("#starter");
let sideor=document.querySelector("#sideor");
let dessert=document.querySelector("#dessert");
let drinks=document.querySelector("#drinks");

cat1.addEventListener("click", openItem);

function openItem(){
    starter.classList.toggle("inactive");
}
cat2.addEventListener("click", openItem2);
function openItem2(){
    mainc.classList.toggle("inactive");
}
cat3.addEventListener("click", openItem3);
function openItem3(){
    sideor.classList.toggle("inactive");
}
cat4.addEventListener("click", openItem4);
function openItem4(){
    dessert.classList.toggle("inactive");
}
cat5.addEventListener("click", openItem5);
function openItem5(){
    drinks.classList.toggle("inactive");
}

let menu=document.querySelector("#menu");

menu.addEventListener("click", openMenu);

function openMenu(){
    secs.classList.toggle("inactive");
}

const readvalues=document.querySelector("#readvalues");
const moretext=document.querySelector("#moretext");
readvalues.addEventListener("click", onpenItemValue);
function onpenItemValue(){
    moretext.classList.toggle("inactive");
}

//**for (let i = 0; i<10; i++){
//**    let clone = template.cloneNode(true);
//**    clone.querySelector("h2").textContent="Doggo";
//**    clone.querySelector("h3").textContent="good woofer";
//    clone.querySelector("img").src="images/download.jpg";

//    main.appendChild(clone);
//}



