const banner_edit_mode = document.querySelector(".banner_edit_mode");
const nav_login_logout = document.querySelector(".nav_login_logout");
const filters_container = document.querySelector(".filters_container");
const update_projects = document.querySelector(".update_projects");

if (sessionStorage.getItem("Sophie_Bluel_Architecte_JWT")) {
  nav_login_logout.innerText = "Logout";
  nav_login_logout.href = "./index.html";
  filters_container.classList.add("filters_container_hidden");
  update_projects.classList.remove("update_projects_hidden");

  // logout
  nav_login_logout.addEventListener("click", () => {
    sessionStorage.removeItem("Sophie_Bluel_Architecte_JWT");
  });
} else {
  // session non logué
  banner_edit_mode.classList.add("banner_edit_mode_hidden");
}
