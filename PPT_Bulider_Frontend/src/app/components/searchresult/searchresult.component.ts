import { Component, OnInit } from '@angular/core';
import { ComponentsService, GetAllSlidesResponse, MetaData } from 'src/app/services/components/components.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface SearchResult {
  name: string;
  title: string;
  imageUrl: string;
  notes: string;
  selected: boolean;
  date?: Date;
  rating?: number;
}


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit  {
  slideUrls: string[] = [];
  slideMetaData: MetaData[] = [];
  selectedSlides: string[] = [];
  currentPage: number = 1;
  slidesPerPage: number = 2;


  constructor(
    private componentsService: ComponentsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.componentsService.getAllSlideUrls().subscribe(
      (response: GetAllSlidesResponse) => {
        if (response && response.data && response.data.objectUrl) {
          this.slideUrls = response.data.objectUrl;
          this.slideMetaData = response.data.metaData;
        } else {
          console.error('Error fetching slide URLs:', response);
        }
      },
      (error) => {
        console.error('Error fetching slide URLs:', error);
      }
    );
  }

  onToggleSlideSelection(url: string): void {
    const index = this.selectedSlides.indexOf(url);
    if (index === -1) {
      this.selectedSlides.push(url); // Add to selectedSlides
    } else {
      this.selectedSlides.splice(index, 1); // Remove from selectedSlides
    }
  }

  generateGoogleDocsUrl(url: string): SafeResourceUrl {
    const googleDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(googleDocsUrl);
  }

  async onMerge(): Promise<void> {
    if (this.selectedSlides.length < 2) {
      console.log('Select at least two slides to merge.');
      return;
    }

    console.log('Merging the following slides:', this.selectedSlides);

    try {
      const directUrls = this.slideUrls.filter(url => this.selectedSlides.includes(url));
      console.log('Direct URLs for merge:', directUrls);

      const formData = await this.urlsToFormData(directUrls);
      console.log('Prepared FormData:', formData);

      this.componentsService.mergeSlides(formData, false) // Set embedded parameter to false
        .subscribe(
          (mergeResponse) => {
            console.log('Merge API Response:', mergeResponse);
            // Handle success, e.g., initiate download
            if (mergeResponse && mergeResponse.downloadUrl) {
              this.downloadFile(mergeResponse.downloadUrl);
            } else {
              console.error('No download URL found in merge response.');
            }
          },
          (error) => {
            console.error('Error merging slides:', error);
            // Handle error
          }
        );

    } catch (error) {
      console.error('Error preparing FormData:', error);
      // Handle error
    }
  }

  async urlsToFormData(urls: string[]): Promise<FormData> {
    const formData = new FormData();

    for (let url of urls) {
      const blob = await this.urlToBlob(url);
      formData.append('files[]', blob, 'slide.pptx'); // Change 'slide.pptx' to a suitable filename
    }

    return formData;
  }

  async urlToBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    return await response.blob();
  }

  downloadFile(url: string): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', 'merged-slides.pptx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  get paginatedSlides(): string[] {
    const startIndex = (this.currentPage - 1) * this.slidesPerPage;
    return this.slideUrls.slice(startIndex, startIndex + this.slidesPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.slidesPerPage < this.slideUrls.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.slideUrls.length / this.slidesPerPage);
  }


}
