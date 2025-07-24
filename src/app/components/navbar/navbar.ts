import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isOpenMenu: boolean = false

  toggleActiveMenu(){
    this.isOpenMenu = !this.isOpenMenu
  }
}
