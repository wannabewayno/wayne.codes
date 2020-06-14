const envelopeLid = document.getElementById('envelope-lid');
const envelope = document.getElementById('envelope');
const emailForm = document.getElementById('email-form');


const lidCallBack = event => {
    const status = getStatus();
	if (event.propertyName === "transform") {
        if ( status === "closed" ) {
            envelopeLid.classList.replace('z4','z1');
            emailForm.classList.add('slide-up','z-depth-5');
        } else {
            setStatus('closed')
        }
    } 
}

const formCallBack = event => {
    const status = getStatus();
	if (event.propertyName === "transform") {
        if (status === "open") {
            envelopeLid.classList.replace('z1','z4')
            envelopeLid.classList.remove('open');
        } else {
            setStatus('open')
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

// Event listeners
// ==============================================================================

envelopeLid.addEventListener("transitionend", lidCallBack);
emailForm.addEventListener("transitionend", formCallBack);
emailForm.addEventListener('click', function(event){
    event.stopPropagation();
});

envelope.addEventListener('click', function(event){
    event.preventDefault();
    const status = getStatus();
    if (status === 'closed') {
        envelope.classList.add('z-depth-4')
        envelopeLid.classList.add('open');
    } else {
        envelope.classList.remove('z-depth-4')
        emailForm.classList.remove('slide-up','z-depth-5');
    }    
});