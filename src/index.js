let urlBase = "https://rickandmortyapi.com/api/character";

const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);

        const input = document.getElementById("name");
        const submitButton = document.getElementById("submit-btn");
        
        //Validacion
        const validacion = () => {
            for(let i = 0; i < data.results.length; i ++){
                if(data.results[i].name === input.value){
                    // Create nodes
                    const card = document.createElement('article');
                    const image = document.createElement('img');
                    const paragraph = document.createElement('p');
                    // Add nodes
                    container.append(card);
                    card.append(image, paragraph);
                    
                }
              
            }     
        }      
        //Events
        submitButton.addEventListener("click", validacion);
        
    }

    catch(error){
        console.log(error);
    }

    //Add character information
    const container = document.getElementById("main-container");

    // Create nodes
    /*const addNodes = () => {
        const card = document.createElement('article');
        const image = document.createElement('img');
        const paragraph = document.createElement('p');
        // Add nodes
        container.append(card);
        card.append(image, paragraph);
    }
    */


    const submitButton = document.getElementById("submit-btn");
    //submitButton.addEventListener("submit", validacion);
    
}

getInfo();
