import youtubersData from './data.js';

const filters = document.querySelector('.filters');
const youtubers = document.querySelector('.youtubers');

// Функция для обновления отображения ютуберов в соответствии с выбранными фильтрами
function updateYoutubers() {
    // Получаем выбранные значения фильтров
    const time = filters.querySelector('#time').value;
    const gender = filters.querySelector('#gender').value;
    const qualities = Array.from(filters.querySelectorAll('input[name="qualities"]:checked')).map(input => input.value);
    const charisma = Array.from(filters.querySelectorAll('input[name="charisma"]:checked')).map(input => input.value);
    const contentType = Array.from(filters.querySelectorAll('input[name="contentType"]:checked')).map(input => input.value);
    const seasons = Array.from(filters.querySelectorAll('input[name="seasons"]:checked')).map(input => input.value);
    const activity = filters.querySelector('#activity').value;
    const content = Array.from(filters.querySelectorAll('input[name="content"]:checked')).map(input => input.value);
    const lore = Array.from(filters.querySelectorAll('input[name="lore"]:checked')).map(input => input.value);
    const subscribers = Array.from(filters.querySelectorAll('input[name="subscribers"]:checked')).map(input => input.value);
    const hardSkills = Array.from(filters.querySelectorAll('input[name="hardSkills"]:checked')).map(input => input.value);

    // Скрываем всех ютуберов
    const allYoutubers = youtubers.querySelectorAll('.youtuber');
    allYoutubers.forEach(youtuber => youtuber.style.display = 'none');

    // Отображаем только ютуберов, которые соответствуют выбранным фильтрам
    const filteredYoutubers = Array.from(allYoutubers).filter(youtuber => {
        const youtuberData = youtubersData.find(data => data.name === youtuber.dataset.name);

        // Проверяем соответствие времени
        const timeMatch = time === 'all' || youtuberData.time === time;

        // Проверяем соответствие остальных параметров
        const genderMatch = gender === 'all' || youtuberData.gender === gender;
        const qualitiesMatch = qualities.length === 0 || qualities.some(quality => youtuberData.qualities.includes(quality));
        const charismaMatch = charisma.length === 0 || charisma.some(char => youtuberData.charisma.includes(char));
        const contentTypeMatch = contentType.length === 0 || contentType.some(type => youtuberData.contentType.includes(type));
        const seasonsMatch = seasons.length === 0 || seasons.some(season => youtuberData.seasons.includes(season));
        const activityMatch = activity === 'all' || youtuberData.activity === activity;
        const contentMatch = content.length === 0 || content.some(item => youtuberData.content.includes(item));
        const loreMatch = lore.length === 0 || lore.some(type => youtuberData.lore.includes(type));

        // Проверяем соответствие количеству подписчиков
        let subscribersMatch = true;
        if (subscribers.length > 0) {
            if (subscribers.includes('100') && youtuberData.subscribers < 100) {
                subscribersMatch = false;
            } else if (subscribers.includes('500') && youtuberData.subscribers < 500) {
                subscribersMatch = false;
            } else if (subscribers.includes('1000') && youtuberData.subscribers < 1000) {
                subscribersMatch = false;
            }
        }

        const hardSkillsMatch = hardSkills.length === 0 || hardSkills.some(skill => youtuberData.hardSkills.includes(skill));

        return timeMatch && genderMatch && qualitiesMatch && charismaMatch && contentTypeMatch && seasonsMatch && activityMatch && contentMatch && loreMatch && subscribersMatch && hardSkillsMatch;
    });

    filteredYoutubers.forEach(youtuber => youtuber.style.display = 'block');
}

// Слушаем изменения в фильтрах
filters.addEventListener('change', updateYoutubers);

// Создаем элементы для отображения ютуберов на странице
youtubersData.forEach(youtuberData => {
    const youtuberElement = document.createElement('div');
    youtuberElement.classList.add('youtuber');
    youtuberElement.dataset.name = youtuberData.name;

    const imageElement = document.createElement('img');
    imageElement.src = youtuberData.image;
    imageElement.alt = youtuberData.name;
    youtuberElement.appendChild(imageElement);

    // Добавляем имя игрока над его фотографией
    const nameElement = document.createElement('div');
    nameElement.textContent = youtuberData.name;
    nameElement.classList.add('youtuber-name');
    youtuberElement.appendChild(nameElement);

    const socialLinksElement = document.createElement('div');
    socialLinksElement.classList.add('social-links');
    for (const [platform, link] of Object.entries(youtuberData.socialLinks)) {
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        socialLinksElement.appendChild(linkElement);
    }
    youtuberElement.appendChild(socialLinksElement);

    youtubers.appendChild(youtuberElement);
});

// Добавляем функциональность для кнопки "Сбросить фильтры"
const resetFiltersButton = document.getElementById('resetFilters');
resetFiltersButton.addEventListener('click', () => {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.value = 'all';
    });
    updateYoutubers();
});