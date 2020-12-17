const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredient = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
};

const ingredientList = ingredients.map(ingredient =>
  createIngredient(ingredient),
);
const ingredientsRef = document.getElementById('ingredients');
ingredientsRef.append(...ingredientList);
