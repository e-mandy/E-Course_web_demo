import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { createIcons, icons} from 'lucide';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { HomeComponent } from './components/home-component/home-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, HomeComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'e-course_web_demo';

  ngAfterViewInit(){
    createIcons({icons});
  }
}
