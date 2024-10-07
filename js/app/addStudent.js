import { apiUrl } from "../utils/getData.js";
import { setModalClose } from "../utils/modal.js";

export async function addStudent(e) {
    e.preventDefault();

    // отримуємо id вакансії
    const id = e.target.getAttribute('data-id');

    // Збираємо дані форми
    const formData = new FormData(e.target);

    // Для обробки даних
    const sendBody = {};

    // Робимо об'єкт з даними
    formData.forEach(function (value, key) {
        sendBody[key] = value;
    });

    // Добавляємо до масиву свої дані
    sendBody['vacancyid'] = Number(id);
    sendBody['rejected'] = 'no';

    // Відправляємо запит на сервер https://67029079bd7c8c1ccd3f39b7.mockapi.io/Vacancydb
    const res = await fetch(apiUrl.students, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(sendBody)
    });


    // Показуємо повідомлення
    Toastify({
        text: "Додано!",
        duration: 5000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    // Очищаємо дані форми
    e.target.reset();

    // Закриваємо модальне вікно
    setModalClose('#modal-add-student');
}