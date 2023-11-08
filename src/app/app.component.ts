import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charityhub';
  contactForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.minLength(3),Validators.email]],
      subject:[],
      message:['',[Validators.required, Validators.minLength(5)]]
    })
  }
}
