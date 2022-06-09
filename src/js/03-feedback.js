
const formRef = document.querySelector('.feedback-form');
console.log(formRef);
const textAreaRef = document.querySelector('.feedback-form textarea');
console.log(textAreaRef);

formRef.addEventListener('submit', onFormSubmit);
textAreaRef.addEventListener('input', onTextAreaInput);

function onFormSubmit(event) {
    event.preventDefault();
}

function onTextAreaInput(event) {
    let message = event.currentTarget.value;
    console.log(message);
    localStorage.setItem('feedback-form-state',message);
}