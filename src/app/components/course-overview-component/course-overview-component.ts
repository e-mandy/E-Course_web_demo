import { Component } from '@angular/core';
import { CardComponent } from '../card-component/card-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-overview-component',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './course-overview-component.html',
  styleUrl: './course-overview-component.css',
})
export class CourseOverviewComponent {
  cards = [
    {
      titre: 'Introduction',
      description:
        'Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor.',
      image: 'images/imgi_7_ecourse-template-courses-img-cover-6.jpg',
      lessonsCount: 28,
      courseDuration: 46,
    },
    {
      titre: 'The Basics',
      description:
        'Morbi felis massa enim ut vitae egestas purus commodo quis vitae iaculis nullam sit est proin netus amet facilisis mattis tortor, suspendisse elementum facilisi.',
      image: 'images/imgi_8_ecourse-template-courses-img-cover-5.jpg',
      lessonsCount: 12,
      courseDuration: 20,
      tasksCount: 4,
    },
    {
      titre: 'Working With Data',
      description:
        'Blandit blandit amet sollicitudin enim lacus, in mauris lectus leo blandit sagittis blandit lorem diam maecenas tortor morbi sed semper lacus, semper magnis imperdiet.',
      image: 'images/imgi_9_ecourse-template-courses-img-cover-4.jpg',
      lessonsCount: 28,
      courseDuration: 46,
      tasksCount: 8,
    },
    {
      titre: 'Validating',
      description:
        'Lectus nunc, sagittis aliquet interdum lectus eu condimentum lorem etiam mollis tincidunt faucibus auctor elit tempus ac interdum imperdiet elit lectus lorem porttitor tellus.',
      image: 'images/imgi_10_ecourse-template-courses-img-cover-3.jpg',
      lessonsCount: 16,
      courseDuration: 28,
      tasksCount: 6,
    },
    {
      titre: 'Loops',
      description:
        'Est diam scelerisque nulla quis ultrices dui tincidunt pharetra eros, quis nec etiam bibendum ligula ornare tellus pretium odio sed faucibus etiam lobortis ut.',
      image: 'images/imgi_11_ecourse-template-courses-img-cover-2.jpg',
      lessonsCount: 10,
      courseDuration: 18,
      tasksCount: 12,
    },
    {
      titre: 'Testing',
      description:
        'Non faucibus tellus non integer integer ipsum, sit libero, id non malesuada ipsum ornare pellentesque semper egestas sodales non nunc sed nibh duis dui.',
      image: 'images/imgi_12_ecourse-template-courses-img-cover-1.jpg',
      lessonsCount: 14,
      courseDuration: 21,
      tasksCount: 18,
    },
  ];
}
