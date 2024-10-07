import { apiUrl } from "../utils/getData.js";

export async function delStudent(e) {
    e.preventDefault();

    // Запитуємо чи дійсно він хоче видалити
    if (confirm('Ви впевнені?')) {
        // Видалення
        const id = e.target.getAttribute('data-rejected-id');

        // Забраковуємо
        await fetch(apiUrl.students + '/' + id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ rejected: 'yes' })
        });

        // Видаляємо карточка зі сторніки
        const card = document.querySelector('#card-' + id);
        card.remove();
    }


}