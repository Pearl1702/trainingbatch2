import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template:`
  <div class="footer">
    <mat-card>@Copyrights Torry Harris Business Solution </mat-card>
  </div>`,
  styles:['.footer{	position: relative; bottom: 0; width: 100%; height: 10px;}.mat-card{background-color: rgb(255, 255, 255);text-align:left; font-size: 10pt;padding: 4px 10px}']
})
export class FooterComponent { }
