// homepage edit mode si token présent
if (sessionStorage.getItem("Sophie_Bluel_Architecte_JWT")) {
  // on récupére le login de la barNav, les filtres, le modifier
  const nav_login_logout = document.querySelector(".nav_login_logout");
  const filters_container = document.querySelector(".filters_container");
  const update_projects = document.querySelector(".update_projects");

  // on change le text Login => Logout
  // on change href du lien Logout
  // on masque les filtres
  // on affiche "Modifier"
  nav_login_logout.innerText = "Logout";
  nav_login_logout.href = "./index.html";
  filters_container.classList.add("filters_container_hidden");
  update_projects.classList.remove("update_projects_hidden");

  // logout
  // au clique sur Logout on supprime le token dans la sessionStorage
  nav_login_logout.addEventListener("click", () => {
    sessionStorage.removeItem("Sophie_Bluel_Architecte_JWT");
  });
} else {
  // session non logué
  // si pas de token, on masque la bannière edit mode
  const banner_edit_mode = document.querySelector(".banner_edit_mode");
  banner_edit_mode.classList.add("banner_edit_mode_hidden");
}
