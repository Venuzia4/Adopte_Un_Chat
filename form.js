const formLastName = document.querySelector('#formLastName');
const formFirstName = document.querySelector('#formFirstName');
const formPhone = document.querySelector('#formPhone');
const formEmail = document.querySelector('#formEmail');
const formMessage = document.querySelector('#formMessage');

const form = document.querySelector('#form');

const formButton = document.querySelector('#formButton');

/**
 * Retourne les donnée du formulaire
 * @returns
 */
const getFormData = () => ({
  lastName: formLastName.value,
  firstName: formLastName.value,
  phone: formPhone.value,
  email: formEmail.value,
  message: formMessage.value,
});

/**
 * Retourne si le formulaire est entièrement rempli ou non
 *
 * @returns Boolean
 */
const formIsFullyFilled = () =>
  Object.values(getFormData()).every((value) => !!value);

form.addEventListener('keyup', () => {
  if (formIsFullyFilled()) {
    formButton.removeAttribute('disabled');
  } else {
    formButton.setAttribute('disabled', '');
  }
});
