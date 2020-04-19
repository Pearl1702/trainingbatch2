import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `<nav class="navbar">
  <a class="navbar-item">
  <img src="logo.jpg" placeholder="Logo">
  <a href="#Home">Home</a>
  <a href="#About">About</a>
  <a href="#Contact Us">Contact Us</a>
  </a>
  </nav>`,
  styles:['.navbar {background-color: blueviolet; padding: 10px;} .navbar a {color: #d3e3e7;font-size: 20px;}']
})

export class HeaderComponent {  }