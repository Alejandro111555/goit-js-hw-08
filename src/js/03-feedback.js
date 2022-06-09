import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('.feedback-form textarea');
const STORAGEKEY = "feedback-form-state";

formRef.addEventListener('submit', onFormSubmit);
textAreaRef.addEventListener('input', throttle(onTextAreaInput,500));

textareaSavedData() ;
 
function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGEKEY)

}

function onTextAreaInput(event) {
   let message = event.currentTarget.value;
    localStorage.setItem(STORAGEKEY,message);
}
function textareaSavedData() {
let savedMessage = localStorage.getItem(STORAGEKEY);
if (savedMessage ) {
    textAreaRef.textContent =  savedMessage;
}
}