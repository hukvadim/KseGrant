export async function getData(url) {
	const res = await fetch(url);

	if (!res.ok) {
		return alert('Помилка при роботі з сервером!');
	}
	
	return await res.json();
}

export const apiUrl = {
	vacancy: 'https://67029079bd7c8c1ccd3f39b7.mockapi.io/Vacancydb',
	students: 'https://67029079bd7c8c1ccd3f39b7.mockapi.io/applicationStud'
}