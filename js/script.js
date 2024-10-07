import { addVacancy } from './app/addVacancy.js';
import { viewVacancy } from './app/viewVacancy.js';
import { formAddVacancy } from './utils/elements.js';
import { setModals } from './utils/modal.js';


// Працюємо з вспливаючими блоками
setModals()

// Виводимо вакансії при завантаженні сторінкт
viewVacancy();

// Слідкуємо за добавлення вакансії
formAddVacancy.addEventListener('submit', addVacancy)