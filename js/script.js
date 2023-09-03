{
    const welcome = () => {
        console.log("Kogo witam kogo goszczę! Ten kod jest już w repozytorium Git.")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const button = document.querySelector(".button");
        body.classList.toggle("dark");
        if (button.innerText === "Włącz ciemny motyw") {
            button.innerText = "Włącz jasny motyw";
        } else {
            button.innerText = "Włącz ciemny motyw";
        }
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }
    init();

}