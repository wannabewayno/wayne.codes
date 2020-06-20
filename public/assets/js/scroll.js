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

    const difference = differencePosition(targetElement,referenceElement);

    condition = processCondition(condition);

    switch (condition.condition) {
        case '<':
            if (Math.abs(difference) < condition.value) {
                addClass( targetElement, ...classesToToggle )
            } else {
                removeClass( targetElement, ...classesToToggle );
            }
            break;
        case '>':
            if (difference > condition.value) {
                addClass( targetElement, ...classesToToggle )
            } else {
                removeClass( targetElement, ...classesToToggle );
            }
            break;
        case '=':
            if (difference === condition.value) {
                addClass( targetElement, ...classesToToggle )
            } else {
                removeClass( targetElement, ...classesToToggle );
            }
            break;
    }
}

const addClass = ( element, ...addTheseClasses ) => {
    console.log(addTheseClasses);
    element.classList.add(...addTheseClasses);
}

const removeClass = ( element, ...removeTheseClasses ) => {
    element.classList.remove(...removeTheseClasses);
}

const processCondition = condition => {
    processedCondition = {
        condition: condition.slice(0,1),
        value: parseFloat(condition.substring(1))
    } 
    return processedCondition 
}

// event listeners 
// ==============================================================================

// executes all these functions when the user scrolls
window.onscroll = function(){
    toggleClassesWhen(burgerBox, footer, '<1', 'pulse','background-beige','z-depth-4');
}