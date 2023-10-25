// delete works

// ajout d'un événemet au clique aux miniatures
// suppression du travail sélectionnés
const deleteWork = async (all_works_thumbnails) => {
  all_works_thumbnails.forEach((works_removable) => {
    works_removable.addEventListener("click", async () => {
      await fetch(
        `http://localhost:5678/api/works/${works_removable.dataset.id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${sessionStorage.getItem(
              "Sophie_Bluel_Architecte_JWT"
            )}`,
          },
        }
      ).then(async (res) => {
        if (res.ok) {
          // on récupére de nouveau tous les travaux depuis l'API
          // on met à jours la page d'accueil
          await getAllWorks();
          // on met à jour l'affichages des miniatures
          display_delete_thumbnails();
        }
      });
    });
  });
};

// affichage des travaux supprimables en miniatures dans la modale
const display_delete_thumbnails = () => {
  // récupération de la div des miniatures
  const delete_works_container_thumbnails = document.querySelector(
    ".delete-works-thumbnails-container"
  );
  // affichage des minatures avec leurs data-id
  delete_works_container_thumbnails.innerHTML = array_All_Works
    .map(
      (thumbnails_work) =>
        `
            <figure class="thumbnails-removable" data-id="${thumbnails_work.id}">
                <img
                    src="${thumbnails_work.imageUrl}"
                    alt="${thumbnails_work.title}"
                    />
                <div class="icon_delete">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </figure>
          `
    )
    .join("");

  // récupération des miniatures créés
  const all_works_thumbnails = document.querySelectorAll(
    ".thumbnails-removable"
  );

  // ajout des événements delete au click sur les miniatures
  deleteWork(all_works_thumbnails);
};
