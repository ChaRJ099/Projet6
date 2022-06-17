const url = new URL(window.location.href);
const photographerId = parseInt(url.searchParams.get("id"));
let photographerName = '';

    async function getPhotographer() {
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
                photographerName = photographer.name;

                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                const photographHeader = document.querySelector(".photograph-header");

                photographHeader.appendChild(userCardDOM);
                
            data.media.forEach((media) => {
                console.log(photographerName);
                if(media.photographerId === photographerId) {
                    
                    const mediaModel = mediaFactory(media, photographerName);
                    const mediaCardDOM = mediaModel.getMediaCardDOM();
                    const photographGallery = document.querySelector(".photograph-gallery");
                    // const test = document.createElement("div");
                    // test.textContent = media.title;
    
                    photographGallery.appendChild(mediaCardDOM);
                }
            })

            }

        });
    };
    
    
    getPhotographer(photographerId);