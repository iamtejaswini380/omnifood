window.addEventListener("scroll", () => {
  const headerElement = document.querySelector(".header");
  if (document.documentElement.scrollTop >= 850) {
    headerElement.classList = "header header--light";
  } else {
    headerElement.classList = "header";
  }
});
