const rootElement = document.documentElement;
const scrollToTopButton = document.querySelector("#scrollToTopBtn");

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.35) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
}

document.addEventListener("scroll", handleScroll);