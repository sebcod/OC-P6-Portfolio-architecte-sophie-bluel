// create work
const createWork = () => {
  // récupération du bouton input img et de son label : la zone de drop
  // récupération de l'input titre
  // on test si une catégories est selectionnée
  const inputImg = document.querySelector("#input-img");
  const dropZoneImg = document.querySelector(".drop-zone-img");
  const inputTitle = document.querySelector("#input-title");
  const inputCategory = document.querySelector("#category-select");

  // récupération du lien src du fichier image selectionné
  // on masque le contenu de la zone de drop
  // on affiche l'image choisie
  const showImg = () => {
    const dropZoneContent = document.querySelector(".drop-zone-content");
    const thumbnailInputImg = document.querySelector(".thumbnailInputImg");
    if (inputImg.files.length > 0) {
      const imgSrc = URL.createObjectURL(inputImg.files[0]);
      dropZoneContent.classList.add("hidden");
      thumbnailInputImg.classList.remove("hidden");
      thumbnailInputImg.src = imgSrc;
    } else {
      dropZoneContent.classList.remove("hidden");
      thumbnailInputImg.classList.add("hidden");
    }
  };

  // à chaque changement d'image on appelle la fonction d'affichage showImg
  // gestion du drop d'image
  // on affecte le fichier dropé à inputImg
  // on appelle la fonction d'affichage showImg
  inputImg.addEventListener("change", showImg);
  dropZoneImg.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  dropZoneImg.addEventListener("drop", (e) => {
    e.preventDefault();
    inputImg.files = e.dataTransfer.files;
    showImg();
  });

  // on test si un fichier image present
  const isImg = () => {
    // test si une image est présente
    const ImgWarning = document.querySelector(".img-warning");
    if (inputImg.files.length > 0) {
      ImgWarning.textContent = "";
      return true;
    } else {
      ImgWarning.textContent = "Image obligatoire";
      inputImg.addEventListener("input", () => showImg());
      inputImg.addEventListener("input", () => isImg());
    }
  };

  // on test si un titre est présent
  const isTitle = () => {
    // récupération du span message d'erreur
    // on test si la longueur du titre dépasse 0 caractères
    const TitleWarning = document.querySelector(".title-warning");
    if (inputTitle.value.length > 0) {
      TitleWarning.textContent = "";
      return true;
    } else {
      TitleWarning.textContent = "Titre obligatoire";
      inputTitle.addEventListener("input", () => isTitle());
    }
  };

  // on remplit les options du select catégories
  const setSelectCategory = () => {
    // récupération de l'input select
    // Création des options à partir des catégories récupérées depuis l'API
    const categorySelect = document.querySelector("#category-select");
    array_All_Category.forEach((category) => {
      categorySelect.innerHTML += `
        <option value="${category.id}">${category.name}</option>
      `;
    });
  };
  setSelectCategory();

  // on test si une catégories est selectionnée
  const isCategory = () => {
    // récupération du champ select catégories
    // récupération du span message d'érreur
    const categoryWarning = document.querySelector(".category-warning");
    if (inputCategory.value === "") {
      categoryWarning.textContent = "Catégorie obligatoire";
      inputCategory.addEventListener("input", () => isCategory());
    } else {
      categoryWarning.textContent = "";
      return true;
    }
  };

  // validation du formulaire
  const btnAddWorksValidate = document.querySelector(".btn-add-works-validate");
  btnAddWorksValidate.addEventListener("click", () => {
    // on test si un fichier image present
    // on test si un titre est present
    // on test si une catégories est selectionnée
    if (isImg() && isTitle() && isCategory()) requestCreate();
  });

  // envoie de la requête à l'API
  const requestCreate = async () => {
    const formulaire = new FormData();
    formulaire.append("image", inputImg.files[0]);
    formulaire.append("title", inputTitle.value);
    formulaire.append("category", inputCategory.value);

    await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        authorization: `Bearer ${sessionStorage.getItem(
          "Sophie_Bluel_Architecte_JWT"
        )}`,
      },
      body: formulaire,
    }).then(async (res) => {
      if (res.ok) {
        // on récupére de nouveau tous les travaux depuis l'API
        // on met à jours la page d'accueil
        await getAllWorks();
      }
    });
  };
};
