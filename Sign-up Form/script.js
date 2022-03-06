const password = document.querySelector("#password");
const confirmed = document.querySelector("#confirm");
const submit = document.querySelector("button");
const passDiv = document.querySelector(".pass")

const fail = document.createElement("p")
fail.classList.add("fail")
fail.textContent = "* Passwords do not match"

submit.addEventListener("click", (e) => {
  if (password.value != confirmed.value) {
    e.preventDefault();
    passDiv.appendChild(fail)
  }
})