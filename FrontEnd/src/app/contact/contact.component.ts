import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('myform')form:NgForm
  @ViewChild('fileinput')fileinput:ElementRef
  name:string=''
  email:string=''
  usermessage:string=''
  selectedfile:any = ''

  constructor(private http:HttpClient){}

  Onsend(event:any){
    this.selectedfile = event.target.files[0]

  }
  Onsubmit(){

      const formdata = new FormData();
      formdata.append('name',this.name)
      formdata.append('email',this.email)
      formdata.append('usermessage',this.usermessage)
      formdata.append('file',this.selectedfile)

      this.http.post('http://127.0.0.1:8000/email', formdata).subscribe()
   
     this.http.post('http://127.0.0.1:8000/', formdata).subscribe();


     if (this.form.valid && this.form.touched){
      alert('Your Message Has Been Sent')
      this.form.resetForm();
      this.fileinput.nativeElement.value = ''
     }

     else{
      alert('Error while submitting form')
     }

     


    }

     
  

  }

