import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }
   
  about=
  [{
    date:'April 23 - June 23',
    title:'Experience',
    description:'Full Stack Developer Intern at Shiash Info Solutions,Chennai-Tamil Nadu',
  },
  {
    date:'July 19 - June 23',
    title:'Higher Education',
    description:"Bachelor of Engineering in Computer Science at Stella Mary's College Of Engineering,Nagercoil-Tamil Nadu",
  },
  {
    date:'March 2019',
    title:'High School Education',
    description:'Completed my High School at S.D.A Matric Higher Secondary School,Pulierranghy-Tamil Nadu',
  },
  {
    date:'March 2017',
    title:'Secondary School Education',
    description:'Completed my Secondary School Education at S.D.A Matric Higher Secondary School,Pulierranghy-Tamil Nadu',
  },
]


}
