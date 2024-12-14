function playOpenAnimation() {
    var mainwindow = document.getElementById('main-window');
    mainwindow.style.animation = 'windowopen 0.20s';
  
    mainwindow.addEventListener('animationend', () => {
      mainwindow.style.animation = '';
    });
}

// GoTo Functions
const windows = [
  "welcome",
  "projects",
  "socials",
  "faq",
  "credits"
]

let currentwindow = null

function goTo(location) {
  // ANIMATION STUFF
  let mainwindow = document.getElementById('main-window');
  mainwindow.style.animation = 'windowclose 0.075s';
  mainwindow.addEventListener('animationend', () => {
    mainwindow.style.animation = '';

    // HIDE ALL WINDOWS
    for (let i = 0; i < windows.length; i++) {
      document.getElementById(windows[i]).style.display = 'none';
    }

    // SHOW THE ONE IT NEEDS TO BE DISPLAYED
    currentwindow = document.getElementById(windows[location]);
    currentwindow.style.display = 'block';
  });
}