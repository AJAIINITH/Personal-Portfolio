import { Component,AfterViewInit } from '@angular/core';
import { ProjectsService } from '../Services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements AfterViewInit{
  swiperParams = {
    slidesPerView: 4,
    breakpoints: {
      '@0.50': {
        slidesPerView: 1,
      },
      '@1.00': {
        slidesPerView: 2,
      },
      '@1.50': {
        slidesPerView: 3,
      },
      '@2.00': {
        slidesPerView: 4,
      },
    },
    on: {
      init() {
      },
    },
  };

  constructor(private myprojects:ProjectsService){}
  projects=this.myprojects.projects

 ngAfterViewInit():void {

  const swiperEl = document.querySelector('swiper-container');
   if (swiperEl){
    Object.assign(swiperEl,this.swiperParams)
   }
 }
  
}
