import { Component } from '@angular/core';

@Component({
  selector: 'app-splitfile',
  templateUrl: './splitfile.component.html',
  styleUrls: ['./splitfile.component.css']
})
export class SplitfileComponent {

  numSlides: number = 0;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
      // You can perform additional operations here, such as reading the file content
    } else {
      console.error('No file selected');
    }
  }

  onSplitFile(): void {
    // Logic to split the file
    // Example: this.numSlides = result of file splitting logic
    this.numSlides = 5; // Example value
  }

}
