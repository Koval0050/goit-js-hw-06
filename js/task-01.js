const categories = document.querySelector("#categories");
const list = categories.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const listing = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${listing}`);
});
