import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightFormatDirective } from '../../directives/highlight-format.directive';

@Component({
  selector: 'app-format-selector',
  standalone: true,
  imports: [CommonModule, HighlightFormatDirective],
  templateUrl: './format-selector.component.html',
  styleUrl: './format-selector.component.css'
})
export class FormatSelectorComponent {
  // Riceve i formati dal padre (book-detail)
  @Input() formats: { label: string; price: number }[] = [];
}