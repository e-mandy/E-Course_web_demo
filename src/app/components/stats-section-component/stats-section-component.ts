import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stats-section-component',
  standalone: true,
  imports: [],
  templateUrl: './stats-section-component.html',
  styleUrl: './stats-section-component.css'
})
export class StatsSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const counterNumbers = document.querySelectorAll('.counter-number');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.textContent || '0', 10);
          this.animateCounter(entry.target as HTMLElement, target);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    counterNumbers.forEach(number => {
      observer.observe(number);
    });
  }

  private animateCounter(element: HTMLElement, target: number): void {
    let current = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 10); // Increment every 10ms

    const timer = setInterval(() => {
      current += increment;
      if (current < target) {
        element.textContent = Math.ceil(current).toString();
      } else {
        element.textContent = target.toString();
        clearInterval(timer);
      }
    }, 10);
  }
}
