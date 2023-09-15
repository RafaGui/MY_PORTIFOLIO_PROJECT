const botaoFecharModal = document.querySelector('.closeModalConf');
const openModal = document.querySelector(".configPage");
const mobileOpenModal = document.querySelector(".ConfigOpenMobile");
const modal = document.querySelector('.configModal');



// DEVE FECHAR O MODAL
botaoFecharModal.addEventListener('click', () => {
    modal.style.opacity = "0"
    modal.style.pointerEvents = "none";
});
// DEVE ABRIR O MODAL DAS CONFIGURAÇÕES
openModal.addEventListener('click', () => {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "All";
})
mobileOpenModal.addEventListener('click', () => {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "All";
})
