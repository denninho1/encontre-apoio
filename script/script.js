// side navigation interaction
const buttonMenu = document.querySelector('.button_menu');
const navSide = document.querySelector('.nav_side_container');
const buttonClose = document.querySelector('.close_btn');
const mobileContainer = document.querySelector('.mobile_container');

const navShow = () => {
    if(navSide.classList.contains('active')) {
        navSide.classList.remove('active');
        mobileContainer.style.overflowY = 'scroll'
        return
    }
    navSide.classList.add('active');
    mobileContainer.style.overflowY = 'hidden';
}

buttonMenu.addEventListener('click', () => {
    navShow();
});
buttonClose.addEventListener('click', () => {
    navShow();
});

// nav bottom select
const navBottomBtns = document.querySelectorAll('.nav_bottom_btn');

navBottomBtns.forEach((navBtn, index) => {
    navBtn.addEventListener('click', () => {
        for (let i = 0; i < navBottomBtns.length; i++) {
            navBottomBtns[i].classList.remove('active');
        }
        navBtn.classList.add('active');
    })
})