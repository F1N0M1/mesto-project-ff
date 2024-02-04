import "./pages/index.css"
import {initialCards} from "./cards"
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function addCardToPage(card, onDelete) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  cardElement.querySelector(".card__title").textContent = name;
  deleteButton.addEventListener("click", onDelete);
  return cardElement;
}

// @todo: Функция удаления карточки
function handleRemoveCard(event) {
  const card = event.target.closest(".places__item");
  card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  cardList.prepend(addCardToPage(item, handleRemoveCard));
});