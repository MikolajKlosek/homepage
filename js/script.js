console.log("Kogo witam kogo goszczę")

let button = document.querySelector(".button");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Włącz jasny motyw";
    } else {
        button.innerText = "Włącz ciemny motyw";
    }
})