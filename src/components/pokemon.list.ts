import { IPokemon } from '../models/pokemon.js';
import { PokemonApi } from '../services/pokemon.api.js';
import { Component } from './component.js';
import { ItemPokemon } from './item.pokemon.js';

export class PokemonList extends Component {
    template!: string;
    pokemons: any;
    pokemonsDetails: any;
    api: PokemonApi;

    constructor(public selector: string) {
        super();
        this.api = new PokemonApi();
        this.pokemons = [];
        this.pokemonsDetails = [];
        this.startPokemons();
    }
    // El await no asigna a pokemons hasta que la información no llegue del servidor.
    async startPokemons() {
        this.pokemons = await this.api.getPokemon();

        // Se consigue toda la información de cada uno de los pokemons y tiene en cuenta que tiene que esperar.
        const pokemonsArray: any = [];
        this.pokemons.results.forEach((item: any) => {
            pokemonsArray.push(item.url);
        });

        this.pokemonsDetails = await Promise.all(
            pokemonsArray.map((url: string) =>
                fetch(url).then((response) => response.json())
            )
        );

        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        document
            .getElementById('main__buttonNext')
            ?.addEventListener('click', () => {
                this.api.url = this.pokemons.next;
                this.startPokemons();
            });
        document
            .getElementById('main__buttonPrevious')
            ?.addEventListener('click', () => {
                this.api.url = this.pokemons.previous;
                this.startPokemons();
            });
    }

    createTemplate() {
        this.template = `<section class="main__section">
                <ul class="main__list">`;
        this.pokemonsDetails.forEach((item: any) => {
            this.template += new ItemPokemon('', item).template;
        });
        this.template += `</ul>
            </section>
            <div class="main__buttons">
                <a href="#" id="main__buttonPrevious">Previous</a>
                <a href="#" id="main__buttonNext">Next</a>
            </div>
            `;
        return this.template;
    }
}
