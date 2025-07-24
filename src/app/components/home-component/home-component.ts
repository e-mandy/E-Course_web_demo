import { Component } from '@angular/core';
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
