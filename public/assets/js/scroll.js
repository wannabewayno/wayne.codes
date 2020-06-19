// handles functionality to do with scroll

// elements
// ==============================================================================
const footer = document.getElementById('footer');
// const burgerBox = docuement.getElementById('burger-box');

// functions
// ==============================================================================

// finding height of an element relative to the window;
const getPositionAtCenter = element => {
    if (element) {
        const { top, height } = element.getBoundingClientRect();
        return top + height/2
    } else {
        return 0;
    }
}

// calculates difference between two elements
const differencePosition = (elementA, elementB) => {
    const difference = getPositionAtCenter(elementA) - getPositionAtCenter(elementB);
    return difference;
}

// carries out a callback from a defined difference in position of two elements. 
const toggleClassesWhen = (targetElement, referenceElement, condition,...classesToToggle) => {
    console.log(classesToToggle);
    const difference = differencePosition(targetElement,referenceElement);
    console.log(difference);

    if (difference === condition) {
        addClass( targetElement, ...classesToToggle )
    } else {
        removeClass( targetElement, ...classesToToggle )
    }
}

const addClass = ( element, ...addTheseClasses ) => {
    console.log(addTheseClasses);
    element.classList.add(...addTheseClasses);
}

const removeClass = ( element, ...removeTheseClasses ) => {
    element.classList.remove(...removeTheseClasses);
}

// event listeners 
// ==============================================================================

// executes all these functions when the user scrolls
window.onscroll = function(){
    toggleClassesWhen(burgerBox, footer, 0, 'pulse','background-beige','z-depth-4');
}