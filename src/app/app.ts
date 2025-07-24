import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { LessonCard } from './components/lesson-card/lesson-card';
import { HomeComponent } from './components/home-component/home-component';


@Component({
  selector: 'app-root',
  imports: [Navbar, LessonCard,HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'e-course_web_demo';
}
