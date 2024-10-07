import { boxVacancyList } from '../utils/elements.js';
import { apiUrl, getData } from '../utils/getData.js';
import { isDataExist, setCartVacancy, setEmptyState } from '../utils/utils.js';

export async function viewVacancy() {
	
	// Отримуємо дані з сервера
	const vacancyList = await getData(apiUrl.vacancy);
	
	// Перевіряємо масив на пустоту
	if (!isDataExist(vacancyList)) {
		
		// Відображаємо пустий стейт
		boxVacancyList.innerHTML = setEmptyState()
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