import { Component } from '@angular/core';
import { Content1 } from "./components/about/header/content1/content1";
import { ContentBody1 } from './components/about/body/content-body1/content-body1';
import { ContentBody2 } from './components/about/body/content-body2/content-body2';
@Component({
  selector: 'app-root',
  template: `
    <app-content1></app-content1>
    <app-content-body1></app-content-body1>
    <app-content-body2></app-content-body2>
  `,
  imports: [Content1,ContentBody1,ContentBody2]
})
export class App {
  
}
