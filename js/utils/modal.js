import { body, modals } from './elements.js';

export function setModals() {
	
	// Перебираємо всі кнопки і вішаємо подію кліку на кнопки
	modals.forEach(btnCallModal => {
		
		// Вішаємо клік на кнопки
		btnCallModal.addEventListener('click', (e) => {
			e.preventDefault();

			// Отримаємо елемент вспливаючого блоку
			const modalSelector = e.target.getAttribute('data-toggle-modal');

			// Якщо є селектор починаємо код
			if (modalSelector) {

				// Отримуємо блок
				const modal = document.querySelector(modalSelector);
	
				// Показуємо або приховуємо блок
				if (modal.classList.contains('show')) {
					body.classList.remove('modal-open');
					modal.classList.remove('show');
				} else {
					body.classList.add('modal-open');
					modal.classList.add('show');
				}
			}
		});
	});
}


// Закриваємо модальне вікно
export function setModalClose(modalSelector = '') {
	
	// Якщо є селектор починаємо код
	if (modalSelector) {

		// Отримуємо блок
		const modal = document.querySelector(modalSelector);

		if (modal.classList.contains('show')) {
			body.classList.remove('modal-open');
			modal.classList.remove('show');
		}
	}
}