import { Component } from '@angular/core';
import { Quality } from '../../interfaces/quality';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualities',
  imports: [CommonModule],
  templateUrl: './qualities.html',
  styleUrl: './qualities.css'
})
export class Qualities {

  qualities : Quality[] = [
    {
      logo : "images/icons8-code-32.png",
      title : "Clean Code",
      description : "Sed pellentesque eget quis amet amet, proin sed sagittis, ligula semper cursus.",
    },
    {
      logo : "images/icons8-trophée-32.png",
      title : "Best Practices",
      description : "Sed pellentesque eget quis amet amet, proin sed sagittis, ligula semper cursus.",
    },
    {
      logo : "images/icons8-globe-32.png",
      title : "Real World Cases",
      description : "Sed pellentesque eget quis amet amet, proin sed sagittis, ligula semper cursus.",
    },
  ]

}
