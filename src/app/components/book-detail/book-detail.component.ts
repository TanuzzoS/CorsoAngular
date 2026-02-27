import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { ReadingTimePipe } from '../../pipes/reading-time.pipe';
import { HighlightFormatDirective } from '../../directives/highlight-format.directive';
import { FormatSelectorComponent } from '../format-selector/format-selector.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, ReadingTimePipe, HighlightFormatDirective, FormatSelectorComponent],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  book: Book | undefined;

  // Dati passati al figlio (FormatSelector) tramite @Input
  formats = [
    { label: 'Formato Kindle', price: 4.99 },
    { label: 'Copertina flessibile', price: 17.10 }
  ];

  private allBooks: Book[] = [
    {
      id: 1,
      title: 'Il caso Alaska Sanders',
      author: 'Joël Dicker',
      price: 4.99,
      originalPrice: 18.00,
      rating: 4.4,
      reviews: 17597,
      pages: 630,
      language: 'Italiano',
      publisher: 'La nave di Teseo',
      description: 'Aprile 1999. Mount Pleasant, una tranquilla cittadina del New Hampshire, è sconvolta da un omicidio...',
      coverUrl: 'https://m.media-amazon.com/images/I/71xvpQ4OWNL._SY425_.jpg',
      readingTimeMinutes: 630
    },
    {
      id: 2,
      title: 'La verità sul caso Harry Quebert',
      author: 'Joël Dicker',
      price: 5.99,
      originalPrice: 20.00,
      rating: 4.5,
      reviews: 22000,
      pages: 720,
      language: 'Italiano',
      publisher: 'La nave di Teseo',
      description: 'Il romanzo che ha consacrato Joël Dicker come autore internazionale.',
      coverUrl: 'https://m.media-amazon.com/images/I/81tCtHFtOgL._SY425_.jpg',
      readingTimeMinutes: 720
    },
    {
      id: 3,
      title: 'Il libro dei Baltimore',
      author: 'Joël Dicker',
      price: 4.49,
      originalPrice: 17.00,
      rating: 4.3,
      reviews: 9800,
      pages: 500,
      language: 'Italiano',
      publisher: 'La nave di Teseo',
      description: 'La storia della famiglia Goldman-de Baltimore.',
      coverUrl: 'https://m.media-amazon.com/images/I/71HcVUFTzlL._SY425_.jpg',
      readingTimeMinutes: 500
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.allBooks.find(b => b.id === id);
  }

  getDiscount(): number {
    if (!this.book) return 0;
    return Math.round((1 - this.book.price / this.book.originalPrice) * 100);
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}