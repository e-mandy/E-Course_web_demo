import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { LessonCard } from './components/lesson-card/lesson-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LessonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'e-course_web_demo';
}
