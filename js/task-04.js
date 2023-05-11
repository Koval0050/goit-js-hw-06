let counterValue = 0;

const ref = {
  counter: document.getElementById("counter"),
  value: document.getElementById("value"),
  decrement: document.querySelector('button[data-action = "decrement"]'),
  increment: document.querySelector('button[data-action = "increment"]'),
};

function incrementNumber() {
  counterValue += 1;
  ref.value.textContent = counterValue;
}
function decrementNumber() {
  counterValue -= 1;
  ref.value.textContent = counterValue;
}

const incrementEl = ref.increment.addEventListener("click", incrementNumber);
const decrementEl = ref.decrement.addEventListener("click", decrementNumber);
