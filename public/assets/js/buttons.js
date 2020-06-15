// html elements
// ==============================================================================
const coderBtn =  document.getElementById('coder-btn');
const designerBtn =  document.getElementById('designer-btn');
const coderImg =  document.getElementById('coder-img');
const designerImg =  document.getElementById('designer-img');


// functions
// ==============================================================================
function swapContent() {

    //guard clause, if user clicked on an active button, do nothing
    if ( this.classList.value.indexOf('active')>= 0 ) {
        return;
    }

    const btnID = this.getAttribute('id');

    switch (btnID) {
        case 'coder-btn' :
            this.classList.add('active');
            designerBtn.classList.remove('active');
            coderImg.classList.remove('not-visible');
            designerImg.classList.add('not-visible');
            break;
        case 'designer-btn':
            this.classList.add('active');
            coderBtn.classList.remove('active');
            designerImg.classList.remove('not-visible');
            coderImg.classList.add('not-visible');
            break;
    }

}

// event listeners
// ==============================================================================
coderBtn.addEventListener('click',swapContent)
designerBtn.addEventListener('click',swapContent)