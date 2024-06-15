import { getDataFromApi } from "./api-service";
import { Character } from "./entities/Character";

export async function initialize() {
    const characters = await getDataFromApi();
    if (!characters) throw new Error(`API doesn't returns data`);
    const characterList = new Array;
    characters.results.map((character:any)=>{
        characterList.push({
            "id": character.id,
            "name": character.name,
            "status": character.status,
            "specie": character.species,
            "gender": character.gender,
            "origin": JSON.stringify(character.origin)
        })
    })
    
    Character.bulkCreate(characterList)
    
}