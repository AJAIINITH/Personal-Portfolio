import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'Skills',component:SkillsComponent},
  {path:'Contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
