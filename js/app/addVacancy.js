import { boxVacancyList } from '../utils/elements.js';
import { apiUrl } from '../utils/getData.js';
import { setModalClose } from '../utils/modal.js';
import { setCartVacancy } from '../utils/utils.js';

export async function addVacancy(e) {
	e.preventDefault();

	// Збираємо дані форми
	const formData = new FormData(e.target);

	// Для обробки даних
	const sendBody = {};

	// Робимо об'єкт з даними
	formData.forEach(function(value, key) {
		sendBody[key] = value;
	});

	// Відправляємо запит на сервер https://67029079bd7c8c1ccd3f39b7.mockapi.io/Vacancydb
	const res = await fetch(apiUrl.vacancy, {
		method: 'POST',
		headers: {'content-type':'application/json'},
		body: JSON.stringify(sendBody)
	});

	// Отримуємо дані з сервера
	const data = await res.json();

	// Перенаправляємо на сторінку відображення вакансії
	boxVacancyList.insertAdjacentHTML('afterbegin', setCartVacancy(data));
	Toastify({
		text: "Вакансію успішно добавлено",	
		duration: 5000,
		style: {
			background: "linear-gradient(to right, #00b09b, #96c93d)",
		}
	}).showToast();

	// Очищаємо дані форми
	e.target.reset();
	
	// Закриваємо модальне вікно
	setModalClose('#modal-add-vacancy');
}