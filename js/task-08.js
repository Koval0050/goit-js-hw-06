const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector("input[name='email']"),
  pass: document.querySelector("input[name='password']"),
  btn: document.querySelector("button[type='submit']"),
};

const handleSubmit = (event) => {
  event.preventDefault();

  const emailValue = refs.email.value;
  const passValue = refs.pass.value;

  if (emailValue === "" || passValue === "") {
    alert("Усі поля повинні бути заповнені!");
    return;
  }

  const user = {
    email: emailValue,
    pass: passValue,
  };

  console.log(user);
  refs.form.reset();
};

refs.form.addEventListener("submit", handleSubmit);
