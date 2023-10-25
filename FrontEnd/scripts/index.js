// création des tableaux qui contiendront tous les travaux et catégories récupérés depuis l'API
let array_All_Works = [];
let array_All_Category = [];

// récupération des travaux via l'API et création des boutons filtres
const initDisplay = async () => {
  // Récupération et affichage de tous les travaux depuis l'API
  await getAllWorks();

  // Récupération des toutes les catégories depuis l'API
  await getAllCategory();
  console.log(array_All_Category);

  // Création et affichage des boutons de filtres
  setFiltersWorks();
  // gestion modale create delete
  modal_create_delete();
};

// Premier affichage avec tous les travaux et création des filtres
initDisplay();
