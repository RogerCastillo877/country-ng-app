import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-list',
  imports: [ DecimalPipe ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  countries = input.required<Country[]>();
}
