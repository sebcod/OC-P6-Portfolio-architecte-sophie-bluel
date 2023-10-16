let array_All_Works = [];
const gallery = document.querySelector(".gallery");
const filter_container = document.querySelector(".filters_container");

// récupération des travaux via l'API et création des boutons filtres
const initDisplay = async () => {
  // Récupération et affichage de tous les travaux via l'API
  await getAllWorks();
  // Création et affichage des boutons de filtres
  setFiltersWorks();
};

// Premier affichage de la page avec tous les travaux et création des filtres
initDisplay();
