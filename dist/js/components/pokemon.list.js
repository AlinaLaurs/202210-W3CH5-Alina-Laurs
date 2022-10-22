var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PokemonApi } from '../services/pokemon.api.js';
import { Component } from './component.js';
import { ItemPokemon } from './item.pokemon.js';
export class PokemonList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokemonApi();
        this.pokemons = [];
        this.pokemonsDetails = [];
        this.startPokemons();
    }
    // El await no asigna a pokemons hasta que la información no llegue del servidor.
    startPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pokemons = yield this.api.getPokemon();
            // Se consigue toda la información de cada uno de los pokemons y tiene en cuenta que tiene que esperar.
            const pokemonsArray = [];
            this.pokemons.results.forEach((item) => {
                pokemonsArray.push(item.url);
            });
            this.pokemonsDetails = yield Promise.all(pokemonsArray.map((url) => fetch(url).then((response) => response.json())));
            this.manageComponent();
        });
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }
    createTemplate() {
        this.template = `<section class="main__section">
                <li>`;
        this.pokemonsDetails.forEach((item) => {
            this.template += new ItemPokemon('', item).template;
        });
        this.template += `</li>
            </section>`;
        return this.template;
    }
}
