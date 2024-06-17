import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit{

  ngAfterViewInit() {
    // Initialize the Bootstrap carousel after the view has been fully initialized
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      // @ts-ignore
      new bootstrap.Carousel(carouselElement);
    }
  }

}
