
    //Mettre le code JavaScript lié à la page photographer.html
    async function getMedia() {
        // Penser à remplacer par les données récupérées dans le json
        const jsonFile = '../../data/photographers.json';
        fetch(jsonFile)
        .then(response => {
          return response.json()
        })
        .then((data) => {
            displayMediaData(data);
            
        })
    }
    
    function displayMediaData(data) {
        
        data.media.forEach((media, photographers) => {
            console.log("Data" + " " + data.photographers);
            console.log("Media" + " " +media);
            if(media.photographerid === photographers.id) {

                console.log("section")
                // const photographerModel = mediaFactory(photographer);
                // const userCardDOM = photographerModel.getUserCardDOM();
                const photographGallery = document.querySelector(".photograph-gallery");
                const test = document.createElement("div");
                test.textContent = "hello";
                test.style.backgroundColor = '#951c1c';

                photographGallery.appendChild(test);

            }
        });
    };
    
    
    getMedia(photographerId);