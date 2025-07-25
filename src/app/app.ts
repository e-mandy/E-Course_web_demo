import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { createIcons, icons} from 'lucide';
import { Highlights } from './components/highlights/highlights';
import { CallToAction } from './components/call-to-action/call-to-action';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { LessonCard } from './components/lesson-card/lesson-card';
import { HomeComponent } from './components/home-component/home-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer,LessonCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'e-course_web_demo';

  ngAfterViewInit(){
    createIcons({icons});
  }
}