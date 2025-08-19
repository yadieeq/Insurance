const burgerButton = document.getElementById("burger-btn")
const dropdown = document.getElementById("dropdown")

burgerButton.onclick = function () {
    dropdown.classList.toggle("dropdown-active")
    console.log(dropdown, burgerButton)
}