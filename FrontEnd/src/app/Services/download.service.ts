import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http:HttpClient) { }

  Downloadfile(fileid:number){
    const downloadUrl = `http://127.0.0.1:8000/download/${fileid}/`;
    window.open(downloadUrl, '_blank');

  }
}
