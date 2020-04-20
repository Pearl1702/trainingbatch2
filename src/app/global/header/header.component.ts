import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `
  <nav class="navbar">
    <img class="logo" src="https://www.torryharris.com/images/this/torry-harris-integration-home.svg" placeholder="Logo">
    <a href="#Home">Home</a>
    <a href="#About">About</a>
    <a href="#Contact Us">Contact Us</a>
  </nav>
  `,
  styles:['.navbar {background-color: rgb(255,69,0);} .logo {height: 3rem; width: 12rem; float: left;}.navbar a { color: #d3e3e7; font-size: 20px; float: left']
})

export class HeaderComponent {  }