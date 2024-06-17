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

  constructor(private componentsService: ComponentsService, private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSplitFile(): void {
    if (this.selectedFile) {
      this.componentsService.splitFile(this.selectedFile).subscribe(
        (response: SplitResponse) => {
          this.numSlides = response.numSlides;
          alert('PPT split successfully');
        },
        (error: any) => {
          console.error('Error splitting file', error);
          if (error.status === 401) {
            alert('Unauthorized. Please log in again.');
            // Optionally, you can redirect the user to the login page
            this.router.navigate(['/login']);
          } else {
            alert('Failed to split the PPT file');
          }
        }
      );
    }
  }

}
