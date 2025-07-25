import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { LessonCard } from '../lesson-card/lesson-card';
import { Qualities } from '../qualities/qualities';
@Component({
  selector: 'app-lesson-page',
  imports: [Navbar,Footer,LessonCard,Qualities],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.css'
})
export class LessonPage {

}
