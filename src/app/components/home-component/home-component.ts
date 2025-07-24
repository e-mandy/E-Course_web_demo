import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
=======
import { HeroSectionComponent } from '../hero-section-component/hero-section-component';
import { AboutTheAuthorComponent } from '../about-the-author-component/about-the-author-component';
import { CourseOverviewComponent } from '../course-overview-component/course-overview-component';
import { SampleVideoComponent } from '../sample-video-component/sample-video-component';
import { MetricsComponent } from '../metrics-component/metrics-component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutTheAuthorComponent,
    CourseOverviewComponent,
    SampleVideoComponent,
    MetricsComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {}
>>>>>>> dbec6630b96ba77b0faab28ca601dcda324f39f8
