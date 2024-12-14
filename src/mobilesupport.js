function isMobile() {
    return window.matchMedia("(max-width: 540px)").matches;
}

const meow = [
    "win1",
    "win2",
    "win3",
    "win4",
    "win5",
];

if (isMobile()) {
    console.log("You are on a mobile device!");
    for (let i = 0; i < meow.length; i++) {
        {
            document.getElementById(meow[i]).style.transform  = "scale(0.70, 0.70)";
        }
    }
} else {
    console.log("You are on a desktop device!");
}