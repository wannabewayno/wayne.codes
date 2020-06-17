// html elements
// ==============================================================================
const coderBtn =  document.getElementById('coder-btn');
const coderImg =  document.getElementById('coder-img');
const coderContent =  document.getElementById('coder-content');

const designerBtn =  document.getElementById('designer-btn');
const designerImg =  document.getElementById('designer-img');
const designerContent =  document.getElementById('designer-content');


// functions
// ==============================================================================
function swapContent() {

    //guard clause, if user clicked on an active button, do nothing
    if ( this.classList.value.indexOf('active')>= 0 ) {
        return;
    }
    console.log('clicked on a non-active button');
    const btnID = this.getAttribute('id');
    console.log(`button ID is :${btnID}`);
    switch (btnID) {
        case 'coder-btn' :
            this.classList.add('active');
            designerImg.classList.add('not-visible');
            designerContent.classList.add('not-visible')
            
            designerBtn.classList.remove('active');
            coderImg.classList.remove('not-visible');
            coderContent.classList.remove('not-visible');
            
            break;
        case 'designer-btn':
            this.classList.add('active');
            coderImg.classList.add('not-visible');
            coderContent.classList.add('not-visible')
            
            coderBtn.classList.remove('active');
            designerImg.classList.remove('not-visible');
            designerContent.classList.remove('not-visible');
            break;
    }
}

// event listeners
// ==============================================================================
coderBtn.addEventListener('click',swapContent)
designerBtn.addEventListener('click',swapContent)