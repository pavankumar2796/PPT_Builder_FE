import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ComponentsService, SplitResponse  } from 'src/app/services/components/components.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit{

  errorMessage: string = '';
  responseBody: SplitResponse | null = null;
  iframeUrls: SafeResourceUrl[] = [];
  metadataForms: any[] = [];

  currentSlideIndex: number = 0;

  constructor(private componentsService: ComponentsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.componentsService.getSplitResponse().subscribe(
      (response: SplitResponse | null) => {
        if (response) {
          this.responseBody = response;
          this.updateIframeUrls();
          console.log('Split response in metadata component:', this.responseBody);
        } else {
          this.errorMessage = 'No split response data found.';
        }
      },
      (error) => {
        console.error('Error fetching split response:', error);
        this.errorMessage = 'Failed to fetch split response data.';
      }
    );
  }

  updateIframeUrls(): void {
    if (this.responseBody && this.responseBody.slideList) {
      this.iframeUrls = this.responseBody.slideList.map(url => 
        this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/gview?url=${url}&embedded=true`)
      );
      this.metadataForms = this.responseBody.slideList.map(() => ({
        metaDataOfSlide: '', // Initialize with default values as needed
        keyWords: '',
        notes: ''
      }));
    }
  }


  onSaveMetadata(): void {
    const formData = this.metadataForms[this.currentSlideIndex];
  
    if (this.responseBody && this.responseBody.metaData) {
      const metadata = {
        id: this.responseBody.metaData[this.currentSlideIndex].id,
        metaDataOfSlide: formData.metaDataOfSlide,
        keyWords: formData.keyWords,
        notes: formData.notes
      };
  
      this.componentsService.saveMetadata(metadata).subscribe(
        (response: any) => {
          console.log('Metadata saved successfully:', response);
          alert('Metadata saved successfully');
          // Optionally, handle success response
        },
        (error: any) => {
          console.error('Error saving metadata:', error);
          alert('Error saving metadata');
          // Optionally, handle error response
        }
      );
    } else {
      console.error('Response body or metadata is null');
    }
  }

  onSubmitAll(): void {
    alert('All slides metadata saved');
  }

  previousSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }
  
  nextSlide(): void {
    if (this.currentSlideIndex < this.iframeUrls.length - 1) {
      this.currentSlideIndex++;
    }
  }
  
}