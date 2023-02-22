const rootElement = document.documentElement;
const scrollToTopButton = document.querySelector("#scrollToTopBtn");

document.addEventListener("scroll", () => {
  scrollToTopButton.style.opacity = window.scrollY > 1500 ? 1 : 0;
});

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
}

document.addEventListener("scroll", handleScroll);