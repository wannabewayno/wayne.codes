const envelopeLid = document.getElementById('envelope-lid');
const envelope = document.getElementById('envelope');
const emailForm = document.getElementById('email-form');
const foldBottom = document.getElementById('fold-bottom');
const textBox = document.getElementById('message');
const closeBtn = document.getElementById('close-button');


const lidCallBack = event => {
    const status = getStatus();
	if (event.propertyName === "transform") {
        if ( status === "closed" ) {
            envelopeLid.classList.replace('z4','z1');
            emailForm.classList.add('z-depth-5','slide-up');
        } else {
            envelope.classList.remove('z-depth-5');
            setStatus('closed')
        }
    } 
}

const formCallBack = event => {
    const status = getStatus();
	if (event.propertyName === "transform" && event.target.getAttribute('id') === 'email-form') {
        if (status === "closed") {
            emailForm.classList.replace('z2','z4');
            foldBottom.classList.add('transition');
            foldBottom.classList.remove('fold-up');
            setTimeout(() => {
                const height = parseFloat(window.getComputedStyle(emailForm).getPropertyValue('height').replace('px',''));
                textBox.classList.remove('not-visible')
                emailForm.style.transition = 'all 250ms cubic-bezier(0.39, 0.575, 0.565, 1)'
                emailForm.style.height = height*2+'px'
            }, 250);
        } else {
            envelopeLid.classList.replace('z1','z4');
            envelopeLid.classList.remove('open');
        }
    } 
}

const foldCallBack = event => {
    const status = getStatus();
	if (event.propertyName === "transform") {
        if (status === "closed") {
            setStatus('open');
        } else {
            emailForm.classList.replace('z4','z2');
            emailForm.classList.remove('slide-up','z-depth-5');
        }
    } 
}

setStatus = status => {
    envelope.setAttribute('status',status);
}

const getStatus = () => {
    //check state of envelope
    return envelope.getAttribute('status');
}


const toggleEnvelope = event => {
    event.stopPropagation();
    const status = getStatus();
    if (status === 'closed') {
        envelope.classList.add('z-depth-5')
        envelopeLid.classList.add('open');
    } else {
        foldBottom.classList.add('fold-up');
        emailForm.style.transition = 'all 250ms cubic-bezier(0.39, 0.575, 0.565, 1)'
        const height = parseFloat(window.getComputedStyle(emailForm).getPropertyValue('height').replace('px',''));
        textBox.classList.add('not-visible')
        emailForm.style.height = height/2+'px'

    }    
}


//TODO: USE FETCH to handle for submit with validations;

// Event listeners
// ==============================================================================
envelopeLid.addEventListener("transitionend", lidCallBack);
emailForm.addEventListener("transitionend", formCallBack);
foldBottom.addEventListener("transitionend", foldCallBack);

// this prevents the form from animating back into the envelope when the user clicks into the form
emailForm.addEventListener('click', function(event){
    event.stopPropagation();
});

envelope.addEventListener('click', toggleEnvelope);
closeBtn.addEventListener('click', toggleEnvelope);