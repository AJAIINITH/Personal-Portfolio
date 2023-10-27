import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'portfolio';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
  
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }



  constructor(private activated:ActivatedRoute){}
 
  
 
  ngOnInit(){
    this.activated.fragment.subscribe((value)=>{
      this.jumpto(value)
       
    })

  }


  @ViewChild('target')el:ElementRef
  jumpto(section){
    if (this.el && this.el.nativeElement) {
    document.getElementById(section).scrollIntoView({behavior:'smooth'})
    }
    
  }
  
 

}






   


