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

//**for (let i = 0; i<10; i++){
//**    let clone = template.cloneNode(true);
//**    clone.querySelector("h2").textContent="Doggo";
//**    clone.querySelector("h3").textContent="good woofer";
//    clone.querySelector("img").src="images/download.jpg";

//    main.appendChild(clone);
//}



