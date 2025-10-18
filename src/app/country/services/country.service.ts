import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, count, map, Observable, of, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private _qeuryCacheCapital = new Map<string, Country[]>();
  private _qeuryCacheCountry = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    if( this._qeuryCacheCapital.has( query ) ) {
      return of( this._qeuryCacheCapital.get( query ) ?? [] );
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        tap( countries => this._qeuryCacheCapital.set( query, countries ) ),
        catchError( err => {
          console.log('Error en el servicio', err);
          return throwError(() => new Error(`No se pudo obtener países con ese query ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    if( this._qeuryCacheCountry.has( query ) ) {
      return of( this._qeuryCacheCountry.get( query ) ?? [] );
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        tap( countries => this._qeuryCacheCountry.set( query, countries ) ),
        catchError( err => {
          console.log('Error en el servicio', err);
          return throwError(() => new Error(`No se pudo obtener países con ese query ${query}`));
        })
      );
  }

  searchByAlphaCode(code: string) {
    code = code.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
        map( countries => countries.at(0)),
        catchError( err => {
          console.log('Error en el servicio', err);
          return throwError(() => new Error(`No se pudo obtener países con ese código ${code}`));
        })
      );
  }
}
