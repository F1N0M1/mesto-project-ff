const test = [
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

addCardToPage(initialCards);
// addCardToPage(test);

const btnOpenPopupAddCard = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupClose = document.querySelector(".popup__close");

const deleteCard = document.querySelector(".card__delete-button");


btnOpenPopupAddCard.addEventListener("click", () => {
  popupAdd.classList.add("popup_is-opened");
});
//popup_is-opened
// @todo: Темплейт карточки
// @todo: DOM узлы

// @todo: Функция создания карточки
function addCardToPage(cards) {
  cards.forEach(function (item) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardList = document.querySelector(".places__list");
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    cardElement.querySelector(".card__image").src = item.link;
    cardElement.querySelector(".card__title").textContent = item.name;

    cardList.prepend(cardElement);
  });
}
// @todo: Функция удаления карточки

deleteCard.addEventListener("click", (evt) => {
  const card = evt.target.closest("li");
  console.log(evt.currentTarget);
  console.log(evt.target);
  card.remove();
});

// @todo: Вывести карточки на страницу


