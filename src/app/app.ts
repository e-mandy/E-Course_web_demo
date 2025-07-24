import { Component } from '@angular/core';
import { LessonCard } from './components/lesson-card/lesson-card';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LessonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'e-course_web_demo';
}
