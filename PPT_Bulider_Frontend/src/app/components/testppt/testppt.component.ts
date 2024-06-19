import { Component,VERSION } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-testppt',
  templateUrl: './testppt.component.html',
  styleUrls: ['./testppt.component.css']
})
export class TestpptComponent {

  base64DataArray: string[] = [''];
  pptxUrl: SafeResourceUrl | null = null;
  documentUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  viewPPTX() {
    const byteArrays = this.base64DataArray.map(base64Data => this.base64ToArrayBuffer(base64Data));

    // Concatenate all byte arrays into a single Uint8Array
    const concatenatedBytes = byteArrays.reduce((acc: Uint8Array, byteArray: Uint8Array) => {
      const combined = new Uint8Array(acc.length + byteArray.length);
      combined.set(acc, 0);
      combined.set(byteArray, acc.length);
      return combined;
    }, new Uint8Array(0));

    // Create a Blob from the Uint8Array
    const blob = new Blob([concatenatedBytes], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Generate Google Docs Viewer URL
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

    // Sanitize the URL
    this.pptxUrl = this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl);
  }

  private base64ToArrayBuffer(base64: string): Uint8Array {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  getDocument(base64Data: string, format: string) {
    const byteArray = this.base64ToArrayBuffer(base64Data);

    let blob: Blob;
    if (format === 'application/pptx')
      blob = new Blob([byteArray], { type: 'application/pptx' });
    else
      blob = new Blob([byteArray]);

    this.documentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  }

}