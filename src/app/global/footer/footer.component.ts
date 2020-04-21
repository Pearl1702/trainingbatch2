import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template:`
  <div class="footer">
    <p> &copy; Copyrights Torry Harris Bussiness Solution</p>
  </div>`,
  styles:['.footer{	position: relative; bottom: 0; width: 100%;}.footer p { font-size: 8pt; padding 2px 20px;}']
})
export class FooterComponent  { 
 
}
