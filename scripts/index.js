// Carga de la pagina
window.addEventListener('DOMContentLoaded', () => {
    // variables
    const d = document
    const menuBtn = d.querySelector('nav .btn-open');
    const menuLst = d.querySelector('nav .menu');

    // Menu Hamburguesa
    menuBtn.addEventListener('click', () => menuLst.classList.toggle('active'))

}   )