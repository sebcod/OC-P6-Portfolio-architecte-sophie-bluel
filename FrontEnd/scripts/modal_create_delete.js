// gestion de la modale create delete

const modal_create_delete = () => {
  // récupération du bouton modifier, du blur noir et de la modale
  const update_projects = document.querySelector(".update_projects");
  const backdropFilter = document.querySelector(".backdropFilter");
  const modal_create_delete_works = document.querySelector(
    ".modal-create-delete-works"
  );
  // récupération de la navigation de la modale, <-, X, et le bouton ajouter une photo
  const cross_modal = document.querySelector(".cross-modal");
  const modal_arrow_left = document.querySelector(".arrow-left-modal");
  const btn_add_works = document.querySelector(".btn-add-works");

  // récupération des sections delete et create de la modale
  const modal_body_delete = document.querySelector(
    ".modal-create-delete-works__body-delete"
  );
  const modal_body_create = document.querySelector(
    ".modal-create-delete-works__body-create"
  );

  // ouverture, fermeture de la modale
  update_projects.addEventListener("click", () => {
    backdropFilter.classList.remove("hidden");
    modal_create_delete_works.classList.remove("hidden");
  });
  backdropFilter.addEventListener("click", () => {
    backdropFilter.classList.add("hidden");
    modal_create_delete_works.classList.add("hidden");
  });
  cross_modal.addEventListener("click", () => {
    backdropFilter.classList.add("hidden");
    modal_create_delete_works.classList.add("hidden");
  });

  // ouverture de la section create
  btn_add_works.addEventListener("click", () => {
    modal_body_delete.classList.add("hidden");
    console.log(modal_body_delete);
    modal_body_create.classList.remove("hidden");
    modal_arrow_left.classList.remove("hidden");
  });

  // retour à la section delete
  modal_arrow_left.addEventListener("click", () => {
    modal_body_delete.classList.remove("hidden");
    console.log(modal_body_delete);
    modal_body_create.classList.add("hidden");
    modal_arrow_left.classList.add("hidden");
  });

  // affichage des travaux en miniatures à supprimer dans la modale
  display_delete_works_container_thumbnails();
};
