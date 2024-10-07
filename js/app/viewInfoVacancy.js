import { formAddStudent, modalContentVacancy } from "../utils/elements.js";
import { apiUrl, getData } from "../utils/getData.js";
import { setModalOpen } from "../utils/modal.js";
import { setVacancy } from "../utils/utils.js";

// Вивсти інфомрацію про вакансію
export async function viewInfoVacancy(e) {
    e.preventDefault();

    // Відбираємо id вакансії
    const id = e.target.getAttribute('data-id');

    // Отримуємо дані з API
    const vacancyData = await getData(`${apiUrl.vacancy}/${id}`);

    // Відкриваємо вікно з даними
    setModalOpen('#modal-view-vacancy');

    // Виводимо дані в модалку
    modalContentVacancy.innerHTML = setVacancy(vacancyData);

    // Оживляємо кнопку відгукнутися на вакансію
    formAddStudent.setAttribute('data-id', vacancyData.id);
}