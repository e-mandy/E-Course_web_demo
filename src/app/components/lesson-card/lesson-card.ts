import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-card',
  imports: [],
  templateUrl: './lesson-card.html',
  styleUrl: './lesson-card.css'
})
export class LessonCard {
    image : string = "assets/images/ecourse-template-courses-img-cover-6.jpg" ;
    title : string = "Introduction";
    lesson_nb : Number = 4;
    hours_lesson : Number = 2;
    task_lesson : Number = 1;
    description : string = "Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor."; 
}
