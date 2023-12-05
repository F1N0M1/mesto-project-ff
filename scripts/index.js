function loadStart() {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardList = document.querySelector('.places__list');

    initialCards.forEach(function(item) {
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

        cardElement.querySelector('.card__image').src = item.link;
        cardElement.querySelector('.card__title').textContent = item.name;

        cardList.append(cardElement);
    });
}

loadStart();
// cardList.append(cardElement);

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
