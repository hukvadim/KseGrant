import { boxVacancyList } from "../utils/elements.js";
import { apiUrl, getData } from "../utils/getData.js";
import { getQueryParam, isDataExist, setCardCandidate, setEmptyState } from "../utils/utils.js";

// Виводимо кандидатів
export async function setCandidates() {

    // Отримуємо id з get параметру
    const id = getQueryParam('id')

    // Перевіряємо на існування
    if (!id) {
        // Виводимо кандидатів
        boxVacancyList.innerHTML = setEmptyState('Не передано номер вакансії...');

    } else {

        // Отримуємо дані з сервера
        const vacancyList = await getData(`${apiUrl.students}?vacancyid=${id}&rejected=no`);
        console.log("vacancyList: ", vacancyList);

        // Перевіряємо масив на пустоту
        if (vacancyList == undefined) {

            // Відображаємо пустий стейт
            boxVacancyList.innerHTML = setEmptyState('Поки немає кандидатів...');
        } else {

            // Очищуємо блок перед виводом
            boxVacancyList.innerHTML = '';

            // Відображаємо список вакансій
            vacancyList.forEach(vacancy => {

                // Відображаємо вакансію
                boxVacancyList.insertAdjacentHTML('afterbegin', setCardCandidate(vacancy));

            });
        }
    }
}