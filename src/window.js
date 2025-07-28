// Reworked Window Functions
const windows = [
  "welcome-window",
  "projects-window",
  "socials-window",
  "faq-window",
  "credits-window"
]

const containers = document.querySelectorAll(".main-content");

let currentOrder = []

function Initialize() {
    containers.forEach(container => {
        container.onmousedown = () => {
            MoveOrder(container);
        }
    });
}

function ChangeOrder() {
    const windows = document.querySelectorAll(".window");

    console.log(currentOrder);

    // make every single window inactive except for the one that has the highest z index I guess
    windows.forEach(window => {
        window.classList.remove("active");
        window.classList.add("inactive");
    })

    for (let i = 0; i < currentOrder.length; i++) {
        currentOrder[i].style.zIndex = i.toString();

        if (i === currentOrder.length - 1) {
            currentOrder[i].firstElementChild.classList.remove("inactive");
            currentOrder[i].firstElementChild.classList.add("active");
        }
    }
}

function MoveOrder(window) {
    for (let i = 0; i < currentOrder.length; i++) {
        if (window.id === currentOrder[i].id) {
            currentOrder.splice(currentOrder.indexOf(window), 1);
        }
    }

    currentOrder.push(window);
    ChangeOrder();
}

function OpenWindow(location) {
    let currentwindow = document.getElementById(windows[location]);

    if (currentwindow.style.display === "none") {
        currentwindow.style.top = '50%';
        currentwindow.style.left = '50%';
        currentwindow.style.transform = 'translate(-50%, -50%)';
        currentwindow.style.animation = 'windowopen 0.20s';
    }

    currentwindow.style.display = 'block';
    currentwindow.style.position = 'absolute';

    MoveOrder(currentwindow);
}

function CloseWindow(location) {
    let currentwindow = document.getElementById(windows[location]);

    currentwindow.style.animation = 'windowclose 0.20s';

    currentwindow.addEventListener("animationend", HandleWindowCloseAnimation);

    currentOrder.splice(currentOrder.indexOf(currentwindow), 1);
    ChangeOrder();
}

const HandleWindowCloseAnimation = ({target}) => {
    target.style.display = 'none';
    target.removeEventListener('animationend', HandleWindowCloseAnimation);
}

function UpdateTimer() {
    let timer = CalculateRemainingTime(new Date("08/07/2025 07:00 AM EST"));
    let text = ""
    if (timer[0] < 0)
    {
        document.getElementById("visual-artifacts-counter").style.display = "none";
        document.getElementById("visual-artifacts-pre-save").style.display = "none";
        document.getElementById("visual-artifacts-listen").style.display = "block";
        return;
    }
    for (let i = 1; i < timer.length; i++) {
        if (timer[i] < 10)
        {
            text = text + "0";
        }
        text = text + timer[i].toString();
        if (i !== timer.length - 1) {
            text += ":";
        }
    }

    console.log(text);
    document.getElementById("visual-artifacts-counter").textContent = text;
    document.getElementById("visual-artifacts-counter").style.display = "block";
    document.getElementById("visual-artifacts-pre-save").style.display = "block";
    document.getElementById("visual-artifacts-listen").style.display = "none";
}

OpenWindow(0);
Initialize();
setInterval(UpdateTimer, 1000)