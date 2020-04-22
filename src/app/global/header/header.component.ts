import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  template: `
    <nav class="navbar">
      <div>
        <img class="logo" src="https://www.torryharris.com/images/this/this_logo_innerpages.svg" placeholder="Logo" height="30px" >
      </div>
      <div class="nav-links">
        <a href="#Home">Home</a>
        <a href="#Contact Us">Contact Us</a>
        <a href="#About">Logout</a>
      </div>
    </nav>`
})

export class HeaderComponent {  }