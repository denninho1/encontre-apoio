import { init, meet, talk } from './main_screens.js';

// mains elements
export const mobileContent = document.querySelector('.mobile_content');
const mobileContainer = document.querySelector('.mobile_container');
const screensContainer = document.querySelector('.screens');

// side navigation interaction
const buttonMenu = document.querySelector('.button_menu');
const navSide = document.querySelector('.nav_overlay');

buttonMenu.addEventListener('click', () => {
    navSide.classList.add('active');
    mobileContainer.style.overflowY = 'hidden';
});

navSide.addEventListener('click', e => {
    let targetClass = e.target.classList.contains('close_nav');
    if(targetClass) {
        navSide.classList.remove('active');
        mobileContainer.style.overflowY = 'scroll'
    };
});

// nav bottom select and change screen 
const navBottomBtns = document.querySelectorAll('.nav_bottom_btn');
const searchBtn = document.querySelector('.search_btn');

navBottomBtns.forEach((navBtn) => {
    navBtn.addEventListener('click', () => {
        for (let i = 0; i < navBottomBtns.length; i++) {
            navBottomBtns[i].classList.remove('active');
        }
        searchBtn.classList.remove('active')
        if(navBtn.classList.contains('init')) {
            screensContainer.innerHTML = init;
        } else if(navBtn.classList.contains('meet')) {
            screensContainer.innerHTML = meet;
            searchBtn.classList.add('active')
        } else {
            screensContainer.innerHTML = talk;
        }

        navBtn.classList.add('active');
    });
});

// reminder card interaction
const buttonsReminder = document.querySelectorAll('.reminder_btn');

const reminderAction = (e) => {
    e.classList.toggle('rated')
}

buttonsReminder.forEach((btn) => {
    btn.addEventListener('click', () => {
        reminderAction(btn);
    })
});

// login as guest
const btnVisitant = document.querySelector('.visitant_btn');
const welcomeScreen = document.querySelector('.welcome_screen');

btnVisitant.addEventListener('click', () => {
    mobileContent.classList.add('active');
    screensContainer.innerHTML = init;
    mobileContainer.removeChild(welcomeScreen)
})

