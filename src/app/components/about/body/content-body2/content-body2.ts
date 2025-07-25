import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-content-body2',
  imports: [NgFor],
  templateUrl: './content-body2.html',
  styleUrl: './content-body2.css'
})
export class ContentBody2 {
  testimonials = [
    {
      stars: 5,
      text: '“Eget blandit faucibus amet feugiat ante semper mattis quam ornare senectus scelerisque consequat placerat quis a in etiam risus diam viverra mattis tellus.”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-3.jpg',
      name: 'Lisa Hallway',
      role: 'VP of Products',
    },
    {
      stars: 5,
      text: '“Proin hac integer pellentesque diam ac nibh potenti euismod turpis fermentum diam tortor, odio eleifend orci.”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-2.jpg',
      name: 'Luis Alberto',
      role: 'App developer',
    },
    {
      stars: 5,
      text: '“Fringilla neque tristique feugiat nibh mauris, eget tincidunt senectus ut feugiat nec!”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-1.jpg',
      name: 'James Carter',
      role: 'Front-end developer',
    },
    {
      stars: 5,
      text: '“Volutpat, urna, accumsan eget eu nisi, maecenas condimentum dictum blandit posuere quisque quis.”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-4.jpg',
      name: 'Philip Williams',
      role: 'Back-end developer',
    },
    {
      stars: 5,
      text: '“Quam tristique viverra elementum felis condimentum cursus ac suspendisse egestas ultricies vitae et, gravida eleifend justo dignissim urna.”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-5.jpg',
      name: 'Ethan May',
      role: 'Full-stack developer',
    },
    {
      stars: 5,
      text: '“Justo nisl egestas neque lacus, vitae et ante amet morbi egestas blandit curabitur mauris”',
      img: 'https://websitedemos.net/teach-ecourse-04/wp-content/uploads/sites/924/2021/08/ecourse-template-reviewer-avatar-img-6.jpg',
      name: 'Lisa Hart',
      role: 'App developer',
    },
  ];
}
