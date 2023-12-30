alert("Site em desenvolvimento");
// CRIAR AS FUNÇÕES PARA ABRIR OS MODAISA
// const buttOpenModal = document.querySelector('.openMod');

// const buttCLoseModal = document.querySelector('.closeMod');

// const objectModal = document.querySelectorAll('modal');



// const OpenContrModal = document.querySelectorAll('.modalController');


// OpenContrModal[0].addEventListener('click', () => {
//     console.log('clicou contato');
//     console.log(OpenContrModal[0]);
// })

// console.log(OpenContrModal[1]);

// OpenContrModal[1].addEventListener('click', () => {
//     console.log('clicou em config');
//     console.log(OpenContrModal[1]);
// })

// CONTATO FASE

const buttOpenContato = document.querySelector('.modalContato');
const modalContato = document.querySelector('.modalConf');
const buttCloseContato = document.querySelector('.closeMod');

buttCloseContato.addEventListener('click', () => {
    modalContato.style.opacity = "0";
    modalContato.style.pointerEvents = "none";
})
buttOpenContato.addEventListener('click', () => {
    modalContato.style.opacity = "1";
    modalContato.style.pointerEvents = "all";
})
