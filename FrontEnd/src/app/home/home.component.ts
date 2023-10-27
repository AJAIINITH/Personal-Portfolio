import { Component } from '@angular/core';
import { DownloadService } from '../Services/download.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private download:DownloadService){}

   OnDownload(fileid:number){
  
     this.download.Downloadfile(fileid)

   }

}
