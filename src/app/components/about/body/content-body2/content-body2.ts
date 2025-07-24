import { Component } from '@angular/core';

@Component({
  selector: 'app-content-body2',
  imports: [],
  templateUrl: './content-body2.html',
  styleUrl: './content-body2.css'
})
export class ContentBody2 {
  testimonials = [
    {
      stars: 5,
      text: '“Eget blandit faucibus amet feugiat ante semper mattis quam ornare senectus scelerisque consequat placerat quis a in etiam risus diam viverra mattis tellus.”',
      img: 'assets/images/ecourse-template-reviewer-avatar-img-1.jpg',
      name: 'LISA HALLWAY',
      role: 'VP of Products',
    },
    {
      stars: 5,
      text: '“Proin hac integer pellentesque diam ac nibh potenti euismod turpis fermentum diam tortor, odio eleifend orci.”',
      img: 'assets/images/ecourse-template-reviewer-avatar-img-2.jpg',
      name: 'LUIS ALBERTO',
      role: 'App developer',
    },
    {
      stars: 5,
      text: '“Fringilla neque tristique feugiat nibh mauris, eget tincidunt senectus ut feugiat nec!”',
      img: 'assets/images/ecourse-template-reviewer-avatar-img-3.jpg',
      name: 'JAMES CARTER',
      role: 'Front-end developer',
    },
  ];
}
