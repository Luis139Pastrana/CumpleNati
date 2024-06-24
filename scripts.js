const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');

// Función para abrir el modal
function openModal(text) {
    modal.style.display = 'flex';
    modalText.innerText = text;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
