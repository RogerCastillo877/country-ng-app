import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1/capital';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(`${API_URL}/${query}`)
      .pipe(
        map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        catchError( err => {
          console.log('Error en el servicio', err);
          return throwError(() => new Error(`No se pudo obtener países con ese query ${query}`));
        })
      );
  }
}
