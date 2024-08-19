/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok){
            throw new Error("Could not fetch resouce");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

async function fetchData(){
    try{
        let pokemonName;
        let messageElement 

        if(document.getElementById("pokemonName").value !== "" && document.getElementById("pokemonSelect").value !== ""){
            messageElement = document.getElementById("text");
            messageElement.textContent = "Please enter a Pokemon name or select one from the dropdown list. Don't select both IDIOT!";
            setTimeout(() => messageElement.textContent = "", 5000);
            return; //Exit the function[fetchData()] if no Pokémon name is provided
        }else if(document.getElementById("pokemonName").value !== ""){
            pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        } else if(document.getElementById("pokemonSelect").value !== ""){
            pokemonName = document.getElementById("pokemonSelect").value;
        }else{
            messageElement = document.getElementById("text");
            messageElement.textContent = "Please enter a Pokemon name or select one from the dropdown list";
            setTimeout(() => messageElement.textContent = "", 5000);
            return; //Exit the function[fetchData()] if no Pokémon name is provided
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonImage = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonImage;
        imgElement.style.display = "block";

    }catch(error){
        console.error(error);
    }
}