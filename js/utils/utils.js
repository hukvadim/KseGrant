export function isDataExist(data = []) {
    return (data.length > 0 || data !== 'Not found' || data == undefined);
}

export function setEmptyState(text = 'Результатів не знайдено!') {
    return `<h2 class="empty-state">${text}</h2>`;
}

export function convertNewlinesToBr(text) {
    return (text != undefined) ? String(text).replace(/\n/g, '<br>') : 'undefined';
}

export function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

export function setCartVacancy(data) {

    // Робимо з ключів об'єкту змінні
    const { id, title, email, firstlastname, organisation, vacDescrtion, vacRequir, vacTask, houramount, yearOfStudy, studentsCount, programs, } = data;

    return `<a href="#" class="card-item card-item-vacancy flex" data-id="${id}">
                <span class="card-item-title-holder flex flex-column gap-10">
                    <span class="card-item-title-info">${programs}</span>
                    <span class="card-item-title">${title}</span>
                    <span class="card-item-details flex flex-wrap gap-10">
                        <span class="card-item-detail-item">Тривалість: ${houramount}</span>
                        <span class="card-item-detail-item">Рік навчання: ${yearOfStudy}</span>
                    </span>
                </span>
            </a>`;
}


export function setCardCandidate(data) {

    // Робимо з ключів об'єкту змінні
    const { firstLastname, email, group, cv, motivation, vacancyid, rejected, id } = data;

    return `<div class="card-item card-item-vacancy flex" id="card-${id}">
                <button class="card-item-close btn btn-white btn-icon" data-rejected-id="${id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <span class="card-item-title-holder flex flex-column gap-10">
                    <span class="card-item-title">${firstLastname}</span>
                    <span class="card-item-details flex flex-wrap gap-10">
                        <span class="card-item-detail-item">Email: ${email}</span>
                        <span class="card-item-detail-item">Група (формат BE25): ${group}</span>
                        <span class="card-item-detail-item w-100">Посилання на резюме: ${cv}</span>
                        <span class="card-item-detail-item w-100">Мотивація: ${motivation}</span>
                    </span>
                </span>
            </div>`;
}


// Вивід інфомрації про вакансію
export function setVacancy(data) {
    const { id, title, email, firstlastname, organisation, vacDescrtion, vacRequir, vacTask, houramount, yearOfStudy, studentsCount, programs } = data;

    // Виводимо текст єдиного запису
    function setVacancyItem(title, text) {
        return `<div class="vacancy-item">
                        <h3 class="vacancy-item-title">${title}:</h3>
                        <p class="vacancy-item-text">${convertNewlinesToBr(text)}</p>
                    </div>`;
    }

    // Виводимо заголовок
    let vacancy = `<h3 class="modal__title text-left vacancy-title">${title}</h3 >`;

    vacancy += setVacancyItem('Опис', vacDescrtion);
    vacancy += setVacancyItem('Вимоги до кандидата', vacRequir);
    vacancy += setVacancyItem('Вимоги до кандидата', vacRequir);
    vacancy += setVacancyItem('Обов\'язки на посаді', vacTask);
    vacancy += setVacancyItem('Організація', organisation);
    vacancy += setVacancyItem('Тривалість', houramount);
    vacancy += setVacancyItem('Рік навчання', yearOfStudy);
    vacancy += setVacancyItem('Скільки студентів потрібно залучити', studentsCount);
    vacancy += setVacancyItem('Програма', programs);
    vacancy += setVacancyItem('Контакти:', `${firstlastname} (${email})`);

    return vacancy;
}