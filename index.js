const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

close.addEventListener("click", () => {
  sideBar.style.display = "none";
});

/* close sidebar when clicked outside */
document.addEventListener("click", (e) => {
  if (!sideBar.contains(e.target) && !hamburger.contains(e.target)) {
    sideBar.style.display = "none";
  }
});
