const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ref = document.getElementById("ingredients");

const list = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  return li;
});
console.log(list);
ref.append(...list);
