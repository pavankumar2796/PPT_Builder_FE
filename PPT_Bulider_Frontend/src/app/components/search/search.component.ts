import { AfterViewInit, Component } from '@angular/core';
import { ComponentsService } from 'src/app/services/components/components.service';

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

  searchTerm: string = '';
  searchResults: any[] = [];
  displayedColumns: string[] = ['fileName', 'locationOfFile'];
 
  constructor(private componentsService: ComponentsService) {}
 
  onSearch() {
    if (this.searchTerm) {
      this.componentsService.search(this.searchTerm).subscribe(
        (response: any) => {
          if (response.success) {
            this.searchResults = response.data;
            console.log('Search results:', this.searchResults);
          } else {
            console.error('Search failed:', response.message);
          }
        },
        error => {
          console.error('Search error:', error);
        }
      );
    }
  }

}
