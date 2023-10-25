// Récupération des catégories depuis l'API
const getAllCategory = async () => {
  // Récupération de toutes les catégories
  await fetch("http://localhost:5678/api/categories")
    .then((res) => {
      return res.json();
    })
    .then((res_json) => (array_All_Category = res_json));
};
