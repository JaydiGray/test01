const FORM_DATA = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onInput);

console.log('hello');
function onInput(e) {
  console.log(e.target);
}
