import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `
    <nav class="navbar">
      <img class="logo" src="https://www.torryharris.com/images/this/this_logo_innerpages.svg" placeholder="Logo">
      <a href="#Contact Us">Contact Us</a>
      <a href="#About">About</a>
      <a href="#Home">Home</a>
    </nav>`,
  styles:['.navbar {background-color: rgb(255,255,255)}.logo {height: 3rem; width: 12rem;}.navbar a { color: rgba(0, 0, 0, .8); font-size: 20px; font-weight: bold; float: right']
})

export class HeaderComponent {  }