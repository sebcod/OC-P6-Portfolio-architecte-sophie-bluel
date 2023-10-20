// Récupération et affichage de tous les travaux
const getAllWorks = async () => {
  const gallery = document.querySelector(".gallery");

  // Récupération de tous les travaux
  await fetch("http://localhost:5678/api/works")
    .then((res) => {
      return res.json();
    })
    .then((res_json) => (array_All_Works = res_json));

  // on met à jour la gallerie de la page d'accueil
  gallery.innerHTML = array_All_Works
    .map(
      (card_work) =>
        `
    <figure>
            <img
              src="${card_work.imageUrl}"
              alt="${card_work.title}"
            />
            <figcaption>${card_work.title}</figcaption>
    </figure>
    `
    )
    .join("");
};
