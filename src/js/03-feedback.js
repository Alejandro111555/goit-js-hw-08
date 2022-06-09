
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
    const message = event.currentTarget.value;
    console.log(message);
    localStorage.getItem('feedback-form-state',message);
}