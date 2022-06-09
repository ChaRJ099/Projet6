const url = new URL(window.location.href);
const photographerId = parseInt(url.searchParams.get("id"));

    //Mettre le code JavaScript lié à la page photographer.html
    async function getPhotographer(photographerId) {
        // Penser à remplacer par les données récupérées dans le json
        const jsonFile = '../../data/photographers.json';
        fetch(jsonFile)
        .then(response => {
          return response.json()
        })
        .then((data) => {
            displayData(data, photographerId);
            
        })
    }
    
    function displayData(data, photographerId) {
        // const photographersSection = document.querySelector(".photographer_section");
    
        data.photographers.forEach((photographer) => {

            
            if(photographer.id === photographerId) {
        
                console.log(photographer.id);
            }
            // const photographerModel = photographerFactory(photographer);
            // const userCardDOM = photographerModel.getUserCardDOM();
            // photographersSection.appendChild(userCardDOM);
        });
    };
    
    
    getPhotographer(photographerId);