const closeContact = document.querySelector('.closeContato');
const openContact = document.querySelector('.contatoController');
const Contact = document.querySelector('.contatoModal');

function ContatoFecha(){
    Contact.style.opacity = "0";
    // Contact.style.display = "none";
    Contact.style.pointerEvents = "none";
    console.log('clicki')
}

closeContact.addEventListener('click', ContatoFecha)


function ContatoAbre(){
    Contact.style.opacity = "1";
    // Contact.style.display = "flex";
    Contact.style.pointerEvents = "All";
}

openContact.addEventListener('click', ContatoAbre);