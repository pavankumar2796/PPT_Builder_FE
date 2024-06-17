import { Component } from '@angular/core';

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
export class SearchresultComponent {

  results: SearchResult[] = [
    {
      name: 'Slide 1',
      title: '',
      imageUrl: 'https://via.placeholder.com/800x400',
      notes: '',
      selected: false
    },
    {
      name: 'Slide 2',
      title: '',
      imageUrl: 'https://via.placeholder.com/800x400',
      notes: '',
      selected: false
    },
    {
      name: 'Slide 3',
      title: '',
      imageUrl: 'https://via.placeholder.com/800x400',
      notes: '',
      selected: false
    },
    // Add more slides as needed
  ];
 
  selectedSortOption: string | null = null; // Initialize with null
  selectedRating: number | null = null; // Initialize selectedRating with null
 
  stars = [1, 2, 3, 4, 5]; // Rating stars
 
  onMerge() {
    const selectedSlides = this.results.filter(result => result.selected);
    if (selectedSlides.length > 1) {
      console.log('Merging the following slides:', selectedSlides);
      // Implement merge logic here
    } else {
      console.log('Select at least two slides to merge.');
    }
  }
 
  setRating(rating: number) {
    this.selectedRating = rating;
  }

}
