import throttle from 'lodash.throttle';
const STORAGE_KEYS = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
}
const savedData = {};

populateData();

const onFormInputs = (evt) => {
    
    savedData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEYS, JSON.stringify(savedData));

}
function populateData() {

    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEYS));
    console.log(parsedData);


    if (parsedData) {
        refs.message.value = parsedData.message || '';
        refs.email.value = parsedData.email || '';
    }
}

refs.form.addEventListener('input', onFormInputs)


