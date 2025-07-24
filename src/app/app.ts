import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'e-course_web_demo';
}
