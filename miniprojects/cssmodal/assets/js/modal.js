const modal = document.getElementById("modalDialog");
const closeButton = document.querySelector(".close");

// add a css class that will display the modal
function openModal() {
  modal.classList.add("show");
}

// remove the css class that displays the modal
function handleCloseModal() {
  modal.classList.remove("show");
}

// handle the modal's close button
closeButton.addEventListener('click', handleCloseModal);

function init() {
    openModal();
}

init();
