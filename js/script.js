import { addStudent } from './app/addStudent.js';
import { addVacancy } from './app/addVacancy.js';
import { callVacancy } from './app/callVacancy.js';
import { delStudent } from './app/delStudent.js';
import { filterVacancy } from './app/filterVacancy.js';
import { setCandidates } from './app/setCandidates.js';
import { viewInfoVacancy } from './app/viewInfoVacancy.js';
import { viewVacancy } from './app/viewVacancy.js';
import { body, boxVacancyList, btnsFilterVacancy, formAddStudent, formAddVacancy, modalCallVacancy } from './utils/elements.js';
import { setModals } from './utils/modal.js';


// Запускаємо код відносно сторінки
const page = body.getAttribute('data-page')

// Переключаємося між сторнінками
switch (page) {
    case 'home':

        // Працюємо з вспливаючими блоками
        setModals()

        // Виводимо вакансії при завантаженні сторінкт
        viewVacancy();

        // Слідкуємо за добавлення вакансії
        formAddVacancy.addEventListener('submit', addVacancy)

        // Слідкуємо за добавлення студента
        formAddStudent.addEventListener('submit', addStudent)

        // Слідкуємо за кліком по вакансії
        boxVacancyList.addEventListener('click', viewInfoVacancy)

        // Оживляємо кнопку "відгукнутися на вакансію"
        modalCallVacancy.addEventListener('click', callVacancy)

        // Слідкуємо за кліком філтру
        btnsFilterVacancy.forEach(btnFilter => {
            btnFilter.addEventListener('click', filterVacancy)
        });
        break;

    case 'candidates':

        // Доступ до кандидаів
        setCandidates();

        // забраковуємо струдента
        boxVacancyList.addEventListener('click', delStudent)
        break;
}
