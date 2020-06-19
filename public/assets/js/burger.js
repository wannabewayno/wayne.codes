// this handles animation code for the menu button

// html elements
// ==============================================================================

const burgerBox = document.getElementById('burger-box');
const menuBtn = document.getElementById('menu');
const linkBox = document.getElementById('link-box');
const linkContainers = Array.from(document.getElementsByClassName('link-container'));

// functions
// ==============================================================================

function toggleState(){
    const menuBtn = document.getElementById('menu');
    
    if (menuBtn.classList.value.indexOf('is-active') !== -1) {
        menuBtn.classList.remove('is-active')
        // then spin the buttons out of sight
        linkBox.classList.add('hide');
        linkContainers.forEach(linkContainer => {
            linkContainer.classList.add('hide-reverse');
        });
    } else {
        menuBtn.classList.add('is-active')
        // then spin the buttons into sight
        linkBox.classList.remove('hide');
        linkContainers.forEach(linkContainer => {
            linkContainer.classList.remove('hide-reverse');
        });
    }
}

// event listeners
// ==============================================================================
linkBox.addEventListener('click',function(event){
    event.stopPropagation();
});
burgerBox.addEventListener('click',toggleState);
