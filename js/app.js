console.log("Script loaded successfully!");

function scrollHeader() {
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);
