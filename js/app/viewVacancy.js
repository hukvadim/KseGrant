import { boxVacancyList } from '../utils/elements.js';
import { apiUrl, getData } from '../utils/getData.js';
import { isDataExist, setCartVacancy, setEmptyState } from '../utils/utils.js';

export async function viewVacancy(url = apiUrl.vacancy) {

	// Отримуємо дані з сервера
	const vacancyList = await getData(url);

	// Перевіряємо масив на пустоту
	if (vacancyList == undefined || vacancyList.length == 0) {

		// Відображаємо пустий стейт
		boxVacancyList.innerHTML = setEmptyState('Вакансій не знайдено!')
	} else {

		// Очищуємо блок перед виводом
		boxVacancyList.innerHTML = '';

		// Відображаємо список вакансій
		vacancyList.forEach(vacancy => {

			// Відображаємо вакансію
			boxVacancyList.insertAdjacentHTML('afterbegin', setCartVacancy(vacancy));

		});
	}
}