
const d = document;

const $form = d.getElementById('form');
const $formGroup = d.querySelector('.form__group');
const $inputs = d.querySelectorAll('#form input');
const $btn = d.querySelector('.form__btn');

const expresiones = {
	firstname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}
	
const fields = {
	firstname: false,
	lastname: false,
	email: false,
	password: false,
}


	
const validationForm = (e) => {
	switch (e.target.name) {
		case 'firstname':
			validationField(expresiones.firstname, e.target, 'firstname')
			break;
		case 'lastname':
			validationField(expresiones.lastname, e.target, 'lastname')
			break;
		case 'email':
			validationField(expresiones.email, e.target, 'email')
			break;
		case 'password':
			validationField(expresiones.password, e.target, 'password')
			break;
	}
}
	
const validationField = (expresion, input, field) => {
	console.log()
	if (expresion.test(input.value)) {
		input.parentElement.parentElement.classList.remove('form__group-incorrect');
		input.parentElement.parentElement.classList.add('form__group-correct');
		fields[field] = true;
	} else {
		input.parentElement.parentElement.classList.remove('form__group-correct');
		input.parentElement.parentElement.classList.add('form__group-incorrect');
	}
}
	
$inputs.forEach( input => {
	input.addEventListener('blur', validationForm);
});
	
	
form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (fields.firstname && fields.lastname && fields.email && fields.password) {
		d.querySelectorAll('.form__group').forEach( group => {
			group.classList.remove('form__group-correct')
		});
	} else {
		$inputs.forEach( input => {
			validationField(expresiones[input.name], input, input.name)
		});
	}
	
})