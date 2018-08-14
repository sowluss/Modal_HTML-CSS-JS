// get the modal element
var modal = document.getElementById('simple-modal');

//  get open modal button
var modalBtn = document.getElementById('modalBtn');

// close button, click to close modal
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for click to open modal
modalBtn.addEventListener('click', openModal);

// listen for click to close modal
closeBtn.addEventListener('click', closeModal);

// listen for outside click closed the modal
window.addEventListener('click', clickOutside);



// function to open modal
function openModal() {
    modal.style.display = 'block';
}
 
// function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// function to close modal if clicked outside
function clickOutside(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
}


