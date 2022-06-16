
    //Mettre le code JavaScript lié à la page photographer.html
    async function getMedia() {
        // Penser à remplacer par les données récupérées dans le json
        const jsonFile = '../../data/photographers.json';
        fetch(jsonFile)
        .then(response => {
          return response.json()
        })
        .then((data) => {
            displayData(data);
            
        })
    }
    
    function displayData(data) {
        
        data.photographers.forEach((photographer) => {
            if(photographer.id === photographerId) {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                const photographHeader = document.querySelector(".photograph-header");

                photographHeader.appendChild(userCardDOM);
            }
        });
    };
    
    
    getMedia(photographerId);