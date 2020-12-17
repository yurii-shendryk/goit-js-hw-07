const categoriesItemsRef = document.querySelectorAll('.item');
const totalCategoriesItems = categoriesItemsRef.length;
console.log(`В списке ${totalCategoriesItems} категории`);
categoriesItemsRef.forEach(item => {
  const categoryName = item.firstElementChild.textContent;
  const totalItems = item.querySelectorAll('li');
  console.log(
    `Категория: ${categoryName} \nКоличество елементов: ${totalItems.length}`,
  );
});
