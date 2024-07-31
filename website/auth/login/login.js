import { auth, signInWithEmailAndPassword } from "../../utiles/script.js";

const login_form = document.getElementById("login_form");
console.log(login_form);
console.log('chl gaa');

login_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  console.log("email", email);
  console.log("password", password);

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "/";
    })
    .catch((err) => alert(err));
});