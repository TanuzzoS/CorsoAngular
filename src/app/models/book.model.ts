export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  pages: number;
  language: string;
  publisher: string;
  description: string;
  coverUrl: string;
  readingTimeMinutes: number;
}