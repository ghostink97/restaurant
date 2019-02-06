const template = document.querySelector("template").content;
const main = document.querySelector("main");

for (let i = 0; i<10; i++){

    let clone = template.cloneNode(true);
    clone.querySelector("h2").textContent="Doggo";
    clone.querySelector("h3").textContent="good woofer";
    clone.querySelector("img").src="images/download.jpg";

    main.appendChild(clone);
}



