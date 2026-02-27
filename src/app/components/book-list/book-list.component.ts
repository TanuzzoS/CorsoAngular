import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [
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
      description: 'Aprile 1999. Mount Pleasant, una tranquilla cittadina del New Hampshire...',
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
}