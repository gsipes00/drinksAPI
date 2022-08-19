import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const removeHidden = (element, elementClass) => {
  element.classList.remove(elementClass);
  console.log("it made it here");
};
const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
  ];
  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-description");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((ing) => {
      if (!ing) return;
      return `<li class='ingredient-item'><i class="far fa-check-square"></i>${ing}</li>
      <p class="ing-description hide-ingredient">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          delectus, maxime, asperiores aliquid perspiciatis adipisci aut ex iste
          unde magni exercitationem nisi consectetur quidem eligendi, voluptates
          porro consequatur corporis ipsam?
        </p>`;
    })
    .join("");

  const ingItem = document.querySelector(".ingredient-item");
  const ingDescription = document.querySelector(".ing-description");
  ingItem.addEventListener(
    "click",
    removeHidden(ingDescription, ".hide-ingredient")
  );

  console.log(drink);
};

export default displayDrink;
