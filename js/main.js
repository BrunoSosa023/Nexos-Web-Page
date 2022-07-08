const openModal = document.querySelector('.boton_ingresar');

const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.modal_close')

const closeModal1 = document.querySelector('.modal_close1')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
}) 

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

const loginOrganizacion = document.getElementById('organizacion') 

loginOrganizacion.addEventListener('click',(e)=>{
    modal.classList.remove('modal--show');

    openModal.innerHTML = "Hola organización"
}) 


const loginOrganizacion1 = document.getElementById('empresa') 

loginOrganizacion1.addEventListener('click',(e)=>{
    modal.classList.remove('modal--show');

    openModal.innerHTML = "Hola empresa"
}) 








