import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadService } from './Services/download.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component'
import { AboutService } from './Services/about.service';
import { ProjectsComponent } from './projects/projects.component';
import { register } from 'swiper/element/bundle';
import { ProjectsService } from './Services/projects.service';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DownloadService,AboutService,ProjectsService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
