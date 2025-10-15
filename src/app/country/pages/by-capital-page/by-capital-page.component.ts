import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryServise = inject(CountryService);
  query = signal('');

  onSearchCapital( query: string ) {
    this.countryServise.searchByCapital( query )
      .subscribe( countries => {
        console.log({ countries });
        this.query.set( query );
      });
  }
}
