let array_All_Works = [];

const gallery = document.querySelector(".gallery");

// Récupération de tous les travaux
const fetch_All_Works = async () => {
  await fetch("http://localhost:5678/api/works")
    .then((res) => {
      return res.json();
    })
    .then((res_json) => (array_All_Works = res_json));
};

// Affichage des travaux
const worksDisplay = async () => {
  await fetch_All_Works();
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

worksDisplay();
