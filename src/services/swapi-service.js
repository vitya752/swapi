export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    getPerson = async (id) => {
        const result = await this.getResource(`/people/${id}`);
        return this._transformPerson(result);
    }

    getAllPeople = async () => {
        const result = await this.getResource('/people/');
        return {
            result: result.results.map(this._transformPerson),
            next: result.next
        };
    }

    getStarship = async (id) => {
        const result = await this.getResource(`/starships/${id}`);
        return this._transformStarship(result);
    }

    getAllStarships = async () => {
        const result = await this.getResource('/starships/');
        return {
            result: result.results.map(this._transformStarship),
            next: result.next
        };
    }

    getPlanet = async (id) => {
        const result = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(result);
    }

    getAllPlanets = async () => {
        const result = await this.getResource('/planets/');
        return {
            result: result.results.map(this._transformPlanet),
            next: result.next
        };
    }

    getMore = async (next) => {
        const data = await fetch(next);
        const res = await data.json();
        return {
            result: await res.results.map(this._transformPlanet),
            next: await res.next
        };
    }

    _transformPerson = (person) => {
        return {
            id: person.url.match(/(\d+)/)[1],
            name: person.name,
            height: person.height,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
            gender: person.gender
        }
    }

    _transformPlanet = (planet) => {
        return {
            id: planet.url.match(/(\d+)/)[1],
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            rotation: planet.rotation_period
        }
    }

    _transformStarship = (starship) => {
        return {
            id: starship.url.match(/(\d+)/)[1],
            name: starship.name,
            model: starship.model,
            cost: starship.cost_in_credits,
            length: starship.length
        }
    }

}