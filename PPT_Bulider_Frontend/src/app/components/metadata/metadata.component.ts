import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit{

  carouselItems: any[] = [];

  constructor(private componentsService: ComponentsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCarouselItems();
  }

  fetchCarouselItems(): void {
    this.componentsService.getCarouselItems().subscribe(
      (response: any) => {
        this.carouselItems = response.result;
      },
      (error: any) => {
        console.error('Error fetching carousel items:', error);
      }
    );
  }

  onSaveMetadata(metadataForm: any): void {
    const metadata = {
      metaDataOfSlide: metadataForm.title,
      keyWords: metadataForm.keywords,
      notes: metadataForm.notes,
      selectedDate: metadataForm.selectedDate,
      count: metadataForm.count || false,
      rating: metadataForm.rating || false
    };

    this.componentsService.saveMetadata(metadata).subscribe(
      (response: any) => {
        console.log('Metadata saved successfully:', response);
        if (response && response.result && response.result.id) {
          this.router.navigate(['/metadata', response.result.id]);
        } else {
          console.error('Invalid response format from server');
        }
      },
      (error: any) => {
        console.error('Error saving metadata:', error);
      }
    );
  }

}
