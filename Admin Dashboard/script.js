const menuBtn = document.querySelector(".menu")
const menuCloseBtn = document.querySelector(".menu-close")
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
  sidebar.setAttribute("style", "position: fixed; right: 0; top: 0; transition: ease-in-out; width: 100%");
})

menuCloseBtn.addEventListener("click", () => {
  sidebar.setAttribute("style", "height: 100vh; position: absolute; right: -9999px; top: -9999px; transition: ease-in-out;")
})