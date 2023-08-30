const Menu = document.querySelector('#modalMenu');
const Controler = document.querySelector('#ModalMenuControler');

Controler.addEventListener('click', () =>{

    const StateAtual = window.getComputedStyle(Menu);
    //  O getComputedStyle retorna o style do elemento por completo

    if (StateAtual.opacity === "1"){
        console.log('Invisivel');
        Menu.style.opacity = "0";
        Menu.style.pointerEvents = "none";
        Menu.style.marginTop = "-100%";
    } else if (StateAtual.opacity === "0"){
        console.log('Visivel');
        Menu.style.opacity = "1";
        Menu.style.pointerEvents = "all";
        Menu.style.marginTop = "0";
    }
});