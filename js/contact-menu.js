// const contactMenu = document.querySelector('.modal-menu')
// const contactButton = document.getElementById('contact-button')

// const togleClass = () => contactMenu.classList.toggle('is-hidden')

// contactButton.addEventListener("click", togleClass);

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.contact-modal')
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
    backdrop.classList.toggle('is-hidden');
    if (backdrop.classList.contains('is-hidden')) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

window.addEventListener('click', e => { 
    const target = e.target 
        if (!target.closest('.contact-modal') && !target.closest('.modal-btn-open')) { 
            backdrop.classList.add('is-hidden')
       }
    });


