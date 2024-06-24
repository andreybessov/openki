const teamModal = document.querySelector('.modal-team-conteiner');
const teamModalBtnOpen = document.querySelector('.team-modal-btn-open');

const toggleModalTeam = () => {
    teamModal.classList.toggle('is-open');
    if (teamModal.classList.contains('is-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
};

teamModalBtnOpen.addEventListener("click", toggleModalTeam);
