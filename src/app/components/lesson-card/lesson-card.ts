import { Component } from '@angular/core';
import { Lessons } from '../../interfaces/lessons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-card',
  imports :[CommonModule],
  standalone: true,
  templateUrl: './lesson-card.html',
  styleUrls: ['./lesson-card.css']
})
export class LessonCard {

    lessonCards : Lessons[] = [
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-6.jpg" ,
        title : "Introduction",
        lesson_nb : 4,
        hours_lesson : 2,
        task_lesson : 1,
        description : "Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor.", 
      },
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-5.jpg" ,
        title : "The Basics",
        lesson_nb : 12,
        hours_lesson : 20,
        task_lesson : 4,
        description : "Morbi felis massa enim ut vitae egestas purus commodo quis vitae iaculis nullam sit est proin netus amet facilisis mattis tortor, suspendisse elementum facilisi.", 
      },
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-4.jpg" ,
        title : "Working with Data",
        lesson_nb : 28,
        hours_lesson : 46,
        task_lesson : 8,
        description : "Blandit blandit amet sollicitudin enim lacus, in mauris lectus leo blandit sagittis blandit lorem diam maecenas tortor morbi sed semper lacus, semper magnis imperdiet.", 
      },
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-3.jpg" ,
        title : "Validating",
        lesson_nb : 16,
        hours_lesson : 28,
        task_lesson : 6,
        description : "Lectus nunc, sagittis aliquet interdum lectus eu condimentum lorem etiam mollis tincidunt faucibus auctor elit tempus ac interdum imperdiet elit lectus lorem porttitor tellus.", 
      },
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-2.jpg" ,
        title : "Loops",
        lesson_nb : 28,
        hours_lesson : 46,
        task_lesson : 8,
        description : "Lectus nunc, sagittis aliquet interdum lectus eu condimentum lorem etiam mollis tincidunt faucibus auctor elit tempus ac interdum imperdiet elit lectus lorem porttitor tellus.", 
      },
      {
        imageUrl : "assets/images/ecourse-template-courses-img-cover-1.jpg" ,
        title : "Testing",
        lesson_nb : 14,
        hours_lesson : 21,
        task_lesson : 18,
        description : "Non faucibus tellus non integer integer ipsum, sit libero, id non malesuada ipsum ornare pellentesque semper egestas sodales non nunc sed nibh duis dui.", 
      },
    ];

}
