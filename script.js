const words = "Coming Soon!";
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

const animation_duration = 4000;

const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (animation_duration - 200) - offset}ms`;

        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (animation_duration / 1.5)));
    document.getElementById("spiral3").append(createElement(-1 * (animation_duration / 3)));
});

function setgradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);