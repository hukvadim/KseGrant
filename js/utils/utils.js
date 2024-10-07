export function isDataExist(data = []) {
	return (data.length > 0 || data !== 'Not found');
}

export function setEmptyState(text = 'Результатів не знайдено!') {
	return `<h2 class="empty-state">${text}</h2>`;
}

export function setCartVacancy(data) {
	
	// Робимо з ключів об'єкту змінні
	const {id, title, email, firstlastname, organisation, vacDescrtion, vacRequir, vacTask, hourAmount, yearOfStudy, studentsCount, programs,} = data;

	return `<a href="#" class="card-item card-item-vacancy flex">
                <span class="card-item-title-holder flex flex-column gap-10">
                    <span class="card-item-title-info">${programs}</span>
                    <span class="card-item-title">${title}</span>
                    <span class="card-item-details flex flex-wrap gap-10">
                        <span class="card-item-detail-item">Тривалість: ${hourAmount}</span>
                        <span class="card-item-detail-item">Рік навчання: ${yearOfStudy}</span>
                    </span>
                </span>
            </a>`;
}