import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-component',
  imports: [CommonModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  @Input() titre!: string;
  @Input() description!: string;
  @Input() lessonsCount?: number;
  @Input() courseDuration?: number;
  @Input() tasksCount?: number;
  @Input() image?: string;
}
