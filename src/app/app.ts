import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { createIcons, icons} from 'lucide';
import { Highlights } from './components/highlights/highlights';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Highlights],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'e-course_web_demo';

  ngAfterViewInit(){
    createIcons({icons});
  }
}
