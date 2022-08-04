import throttle from 'lodash.throttle';
const STORAGE_KEYS = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
    submit: document.querySelector(".feedback-form button")
}
let savedData = {};

populateData();

const onFormInputs = (evt) => {
    
    savedData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEYS, JSON.stringify(savedData));

}
function populateData() {
    savedData = localStorage.getItem(STORAGE_KEYS) ? JSON.parse(localStorage.getItem(STORAGE_KEYS)) : {}

    if (savedData) {
        refs.message.value = savedData.message || '';
        refs.email.value = savedData.email || '';
    }
}

refs.form.addEventListener('input', throttle(onFormInputs, 500));

const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(savedData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEYS);
}
refs.form.addEventListener('submit', handleSubmit);


