import { setModalClose, setModalOpen } from "../utils/modal.js";

export function callVacancy(e) {
    e.preventDefault();

    // Так як попадаємо в модалку форми з перегляду вакансіх закриваємо модалку вакансії
    setModalClose('#modal-view-vacancy');

    // Відкриваємо форму для студента
    setTimeout(() => {
        setModalOpen('#modal-add-student');
    }, 700);


}