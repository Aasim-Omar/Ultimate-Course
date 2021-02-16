// Toggled Sidebar
document.querySelector(".toggle-sidebar").addEventListener("click", function() {
  document.querySelector(".sidebar").classList.toggle("no-sidebar");
  document.querySelector(".content-area").classList.toggle("no-sidebar");
});