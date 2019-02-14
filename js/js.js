
const template = document.querySelector("template").content;
const cat1=document.querySelector("#cat1");
const cat2=document.querySelector("#cat2");
const cat3=document.querySelector("#cat3");
const cat4=document.querySelector("#cat4");
const cat5=document.querySelector("#cat5");
let starter=document.querySelector("#starter");
let sideor=document.querySelector("#sideor");
let dessert=document.querySelector("#dessert");
let drinks=document.querySelector("#drinks");
const readvalues=document.querySelector("#readvalues");
const moretext=document.querySelector("#moretext");
const hidevalues=document.querySelector("#hidevalues");
const modal=document.querySelector(".modal");
const lessinf=document.querySelector("#lessinf");
const vegetarian=document.querySelector(".vegetarian");

//API shortcuts
const productlistLink = "http://kea-alt-del.dk/t5/api/productlist";
const catLink = "http://kea-alt-del.dk/t5/api/categories";
const productLink = "http://kea-alt-del.dk/t5/api/product?id=";
const imgLink = "https://kea-alt-del.dk/t5/site/imgs/";


fetch("http://kea-alt-del.dk/t5/api/productlist").then(e=>e.json()).then(data=>data.forEach(showData))

function showData(oneObject){
    let clone = template.cloneNode(true);
    clone.querySelector("#name").textContent=oneObject.name;
    clone.querySelector("#price").textContent=oneObject.price;
    clone.querySelector("#dishpic").src="imgs/medium/" + oneObject.image + "-md.jpg";

    const button=document.querySelector("#moreinf");
    clone.querySelector("button").addEventListener("click", ()=>{
    fetch(productLink+oneObject.id).then(e=>e.json()).then(data=>detailsShow(data));
        });

    function detailsShow(product){
        console.log(product);
        modal.querySelector("h1").textContent=product.name;
        modal.querySelector("#longdesc").textContent=product.longdescription;
        modal.querySelector("#discount").textContent=product.price-(product.price*product.discount/100);
        modal.querySelector("img").src="imgs/medium/" + product.image + "-md.jpg";
        modal.classList.remove("inactive");
    }

    function veggieboi(product){
        if (product.vegetarian==false){
            vegetarian.classList.add("inactive");
        }
    }
    veggieboi(oneObject);            
    

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

readvalues.addEventListener("click", onpenItemValue);
hidevalues.addEventListener("click", onpenItemValue);

function onpenItemValue(){
    moretext.classList.toggle("inactive");
    hidevalues.classList.toggle("inactive");
    readvalues.classList.toggle("inactive");
}



lessinf.addEventListener("click", ()=>modal.classList.add("inactive"));


//**for (let i = 0; i<10; i++){
//**    let clone = template.cloneNode(true);
//**    clone.querySelector("h2").textContent="Doggo";
//**    clone.querySelector("h3").textContent="good woofer";
//    clone.querySelector("img").src="images/download.jpg";

//    main.appendChild(clone);
//}



