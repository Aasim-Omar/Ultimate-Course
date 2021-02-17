// Toggled Sidebar
document.querySelector(".toggle-sidebar").addEventListener("click", function() {
  document.querySelector(".sidebar").classList.toggle("no-sidebar");
  document.querySelector(".content-area").classList.toggle("no-sidebar");
});

// Slide Tiggle
// document.querySelectorAll(".drop-down").forEach(function(drop) {
//   drop.addEventListener("click", function (e) {
//     var subChildHeight = this.children[1].scrollHeight;
//     if (this.classList.contains("hidden")) {
//       this.children[1].style.height = 0;
//     } else {
//       this.children[1].style.height = `${subChildHeight}px`;
//     }
//     this.classList.toggle("hidden");
//     this.children[0].children[0].classList.toggle("rotate");
//   });
// });

document.querySelectorAll(".drop-down").forEach(function (drop) {
  drop.addEventListener("click", function () {
    if (this.children[1].clientHeight > 0) this.children[1].style.height = 0;
    else this.children[1].style.height = this.children[1].scrollHeight + "px";
    this.children[0].children[0].classList.toggle("rotate");
  });
});

// Notifaictions Toggle
document.querySelector(".noti-toggle").addEventListener("click", function() {
  if (this.nextElementSibling.clientHeight) {
    this.nextElementSibling.style.height = 0;
  } else {
    this.nextElementSibling.style.height = `${this.nextElementSibling.scrollHeight}px`;
  }
});

// Toggle Full Screen
document.querySelector(".toggle-full-screen").addEventListener("click", function() {
  if(this.classList.contains("full-screen")) {
    closeFullscreen();
  } else {
    openFullscreen();
  }
  this.classList.toggle("full-screen");
});

//Full Screen Functios
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
// Close Full Screen
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}





















