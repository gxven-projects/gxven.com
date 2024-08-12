function isMobile() {
    return window.matchMedia("(max-width: 540px)").matches;
}

const meow = document.getElementById("main");

if (isMobile()) {
    console.log("You are on a mobile device!");
    meow.style.transform  = "scale(0.70, 0.70)"
} else {
    console.log("You are on a desktop device!");
}