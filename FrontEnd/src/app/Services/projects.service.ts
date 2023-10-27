import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  projects=[
    {
     src:"../../assets/images/Portfolio.png",
     title:'Personal Portfolio',
     description:'Portfolio is a web application which summarizes about me,my skills and projects',
     tech:'Angular,Django,MySQL',
     link:'https://github.com/AJAIINITH/Personal-Portfolio'

    },
    {
      src:"../../assets/images/Carbon.png",
      title:'Carbon Estimation Web Application',
      description:'Carbon Estimation web application is used to calculate the amount of carbon footprint detected in a location',
      tech:'Angular,Django,MySQL',
      link:'https://github.com/AJAIINITH/Carbon-Estimation-Application'
 
     },
     {
      src:"../../assets/images/Household.png",
      title:'Household Services Web Application',
      description:'Household Services web application allows users to book household services within their desired location',
      tech:'Bootstrap,Django,MySQL',
      link:'https://github.com/AJAIINITH/HouseHold-Services-Provider'
 
     },
     {
      src:"../../assets/images/SkillJob.png",
      title:'SkillJob Recommender Application',
      description:'Skill Job Recommender is a web application which allows users to find jobs based on their skillset',
      tech:'HTML,CSS,Javascript,Django,MySQL',
      link:'https://github.com/IBM-EPBL/IBM-Project-49157-1660816408'
 
     },
     {
      src:"../../assets/images/Cricket.png",
      title:'Cricket Blog System',
      description:'Cricket Blog System is a web application which showcases cricket players and their stats',
      tech:'HTML,CSS,Javascript,Python,MySQL',
      link:'https://github.com/AJAIINITH/Cricket-Blog-System'
 
     },
  ]


}
