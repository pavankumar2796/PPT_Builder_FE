import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize the Bootstrap carousel after the view has been fully initialized
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      // @ts-ignore
      new bootstrap.Carousel(carouselElement);
    }
  }

}
