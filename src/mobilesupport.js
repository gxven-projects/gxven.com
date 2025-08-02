function isMobile() {
    return window.matchMedia("(max-width: 900px)").matches;
}

const meow = [
    "win1",
    "win2",
    "win3",
    "win4",
    "win5",
];

function check()
{
    if (isMobile()) {
        console.log("Mobile/Tablet detected!");
        window.location.href = "../mobile.html";
    } else {
        console.log("You are on a desktop device!");
    }
}

check();