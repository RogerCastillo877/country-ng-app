import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    console.log(restCountry);
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flags.svg,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common || restCountry.name.common,
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
