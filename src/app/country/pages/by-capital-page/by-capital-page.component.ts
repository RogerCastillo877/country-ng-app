import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  imports: [],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  onSearchCapital( term: string ) {
    console.log({ term });

  }
}
