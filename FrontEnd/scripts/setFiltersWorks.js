// gestion de l'affichage des travaux avec les filtres

const setFiltersWorks = () => {
  const gallery = document.querySelector(".gallery");
  const filter_container = document.querySelector(".filters_container");

  // création d'un tableau de valeur unique pour les catégories
  let arrayOfCategory = new Set();

  // Ajout de la catégories "Tous"
  arrayOfCategory.add("Tous");

  // Récupération des catégories à filtrer
  array_All_Works.forEach((work) => arrayOfCategory.add(work.category.name));

  // Création des boutons à partir des catégories récupérées dans array_All_Works
  arrayOfCategory.forEach((category) => {
    const btnFilter = document.createElement("input");
    btnFilter.setAttribute("type", "submit");
    btnFilter.setAttribute("value", category);
    // initialisation du filtre "tous" comme actif
    if (category === "Tous") btnFilter.classList.add("BtnFilterActive");
    filter_container.appendChild(btnFilter);
  });

  // Récupération dans le DOM des boutons de filtre créés
  const filterBtns = document.querySelectorAll(
    "#portfolio input[type='submit']"
  );

  // on parcour les boutons filtres
  // on ajout d'un evenement au clique
  // affichage les travaux de la catégories selectionnée
  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", () => {
      // Au clique sur un bouton on retire la classe "BtnFilterActive" à tous les boutons
      filterBtns.forEach((btnClass) =>
        btnClass.classList.remove("BtnFilterActive")
      );
      // On ajout la classe "BtnFilterActive" au bouton cliqué
      filterBtn.classList.add("BtnFilterActive");

      // et on affiche les travaux de la catégories selectionnée
      gallery.innerHTML = array_All_Works
        .map((card_work) =>
          filterBtn.value === card_work.category.name ||
          filterBtn.value === "Tous"
            ? `
            <figure>
                    <img
                      src="${card_work.imageUrl}"
                      alt="${card_work.title}"
                    />
                    <figcaption>${card_work.title}</figcaption>
            </figure>
            `
            : ""
        )
        .join("");
    });
  });
};
