const inputRef = document.querySelector("#validation-input");

const checkLength = () => {
  const inputValue = inputRef.value;
  const dataLength = inputRef.getAttribute("data-length");

  if (inputValue.length === parseInt(dataLength)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", checkLength);
