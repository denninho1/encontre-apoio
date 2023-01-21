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

// nav bottom select and change screen 
const navBottomBtns = document.querySelectorAll('.nav_bottom_btn');
const screens = document.querySelectorAll('.screen');
const searchBtn = document.querySelector('.search_btn');

navBottomBtns.forEach((navBtn, index) => {
    navBtn.addEventListener('click', () => {
        for (let i = 0; i < navBottomBtns.length; i++) {
            navBottomBtns[i].classList.remove('active');
        }
        searchBtn.classList.remove('active')
        if(navBtn.classList.contains('init')) {
            screens[0].style.marginLeft = '0'
        } else if(navBtn.classList.contains('meet')) {
            screens[0].style.marginLeft = '-100%'
            searchBtn.classList.add('active')
        } else {
            screens[0].style.marginLeft = '-200%'
        }

        navBtn.classList.add('active');
    });
});



