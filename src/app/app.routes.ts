import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';
import { LessonsComponent } from './components/lessons-component/lessons-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'lessons',
    component: LessonsComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  }
];