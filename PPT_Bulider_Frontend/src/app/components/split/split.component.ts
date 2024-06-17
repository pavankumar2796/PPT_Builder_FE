import { Component } from '@angular/core';
import { ComponentsService } from 'src/app/services/components/components.service';
import { Router } from '@angular/router';

export interface SplitResponse {
  numSlides: number;
}

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent {

  numSlides: number | null = null;
  selectedFile: File | null = null;
  selectedFileName: string = '';

  constructor(private componentsService: ComponentsService, private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.selectedFileName = this.selectedFile.name;
    }
  }

  onSplitFile(): void {
    if (this.selectedFile) {
      this.componentsService.splitFile(this.selectedFile).subscribe(
        (response: SplitResponse) => {
          console.log(response,'response');

          let data = JSON.stringify(response)

          localStorage.setItem("ppt",data)
          
          this.numSlides = response.numSlides;
          alert('PPT split successfully');
        },
        (error: any) => {
          console.error('Error splitting file', error);
          alert('Failed to split the PPT file');
          this.resetForm();
        }
      );
    } else {
      alert('No file selected');
    }
  }

  resetForm(): void {
    this.selectedFile = null;
    this.selectedFileName = '';
    this.numSlides = null;
  }

}
