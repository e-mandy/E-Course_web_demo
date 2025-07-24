import { Component } from '@angular/core';
import { StatsSectionComponent } from '../stats-section-component/stats-section-component';
import { FeaturedInComponent } from '../featured-in-component/featured-in-component';

@Component({
  selector: 'app-metrics-component',
  imports: [StatsSectionComponent, FeaturedInComponent],
  templateUrl: './metrics-component.html',
  styleUrl: './metrics-component.css',
})
export class MetricsComponent {}
