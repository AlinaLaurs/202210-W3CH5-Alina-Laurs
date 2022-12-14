import { IPokemon } from '../models/pokemon.js';

export class PokemonApi {
    // Es la que va a interactuar con el servidor
    public url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }

    getPokemon(): Promise<Array<IPokemon>> {
        // Esta función me promete un array de pokemons (porque no me lo puede dar de manera inmediata, el servidor tiene que darlos).
        return fetch(this.url).then((response) => response.json());
    }
}
