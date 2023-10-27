import { Component } from '@angular/core';
import { AboutService } from '../Services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 
  constructor(private aboutservice:AboutService){}
  aboutme=this.aboutservice.about

}
