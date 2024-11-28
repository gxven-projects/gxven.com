function playOpenAnimation() {
    var mainwindow = document.getElementById('main-window');
    mainwindow.style.animation = 'windowopen 0.20s';
  
    mainwindow.addEventListener('animationend', () => {
      mainwindow.style.animation = '';
    });
}
  
function playCloseAnimation() {
  var mainwindow = document.getElementById('main-window');
  mainwindow.style.animation = 'windowclose 0.075s';

  mainwindow.addEventListener('animationend', () => {
    mainwindow.style.animation = '';
  });
}
// GoTo Functions
async function goHome() {
  await playCloseAnimation();
  window.location.href = '../index.html';
}

async function goTo(location) {
  await playCloseAnimation();
  window.location.href = location;
}