// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");
const popupClose = document.querySelector(".popup__close");

// @todo: Функция создания карточки
function addCardToPage(name, link, del) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = name;
  cardElement.querySelector(".card__title").textContent = name;
  deleteButton.addEventListener("click", (del));
  return cardElement;
}

// @todo: Функция удаления карточки
function removeCard(event) {
  const card = event.target.closest(".places__item");
  card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  cardList.prepend(addCardToPage(item.name, item.link, removeCard));
});