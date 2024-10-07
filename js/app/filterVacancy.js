import { apiUrl } from "../utils/getData.js";
import { viewVacancy } from "./viewVacancy.js";

export function filterVacancy(e) {
    e.preventDefault();

    // Відбираємо ключ фільтру
    const key = e.target.getAttribute('data-filter-vacancy');

    // Формуємо посилання до api
    const url = (key == 'any') ? apiUrl.vacancy : apiUrl.vacancy + '/' + key;

    // Виводимо вакансії відносно фільтру
    viewVacancy(url);

}