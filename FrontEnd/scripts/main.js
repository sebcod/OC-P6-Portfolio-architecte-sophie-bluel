// création du table qui contiendra tous les travaux récupérés depuis l'API
let array_All_Works = [];

// récupération des travaux via l'API et création des boutons filtres
const initDisplay = async () => {
  // Récupération et affichage de tous les travaux via l'API
  await getAllWorks();
  // Création et affichage des boutons de filtres
  setFiltersWorks();
  // gestion modale create delete
  modal_create_delete();
};

// Premier affichage avec tous les travaux et création des filtres
initDisplay();
