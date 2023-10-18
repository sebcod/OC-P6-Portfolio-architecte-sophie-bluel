const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputSubmit = document.querySelector("#submit");
const login_error_message = document.querySelector(".login_error_message");

inputSubmit.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputEmail.value,
      password: inputPassword.value,
    }),
  })
    .then((res) => res.json())
    .then((res_json) => {
      if (res_json.token) {
        sessionStorage.setItem("Sophie_Bluel_Architecte_JWT", res_json.token);
        window.location.href = "../index.html";
      } else {
        login_error_message.innerHTML =
          "Les informations utilisateur / mot de passe ne son pas correctes.";
      }
    });
});
