// gestion de la connection utilisateur
// récupération du token JWT

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
        // stockage du token JWT dans sessionStorage
        sessionStorage.setItem("Sophie_Bluel_Architecte_JWT", res_json.token);
        // redirection sue la page d'accueil
        window.location.href = "../index.html";
      } else {
        // si pas de token, affichage d'un message d'erreur
        login_error_message.innerHTML =
          "Erreur dans l'identifiant ou le mot de passe.";
      }
    });
});