import throttle from 'lodash.throttle';

const FORM_DATA_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem(FORM_DATA_KEY)) ?? {};

onPageReload(formData);

feedbackForm.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(FORM_DATA_KEY);
  feedbackForm.reset();
}

function onPageReload(data) {
  if (data) {
    feedbackForm.elements.email.value = data.email;
    feedbackForm.elements.message.value = data.message;
  }
}
