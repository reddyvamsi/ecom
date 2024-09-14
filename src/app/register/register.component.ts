import { Component } from '@angular/core';
import {FormBuilder,FormGroup, MaxLengthValidator, Validators} from '@angular/forms'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  rigersterformdata$=new BehaviorSubject<boolean>(false);
  registerform!:FormGroup<any>;

  constructor(private fb:FormBuilder){
    this.registerform=this.fb.group({
      firsttName:['',Validators.required],
      lastName:['', Validators.required],
      eMail:['', [Validators.required, Validators.email]],
      passWord: ['', Validators.required]
    })
    }
    rigersterEvent(){
      console.log("vamsi")
      this.rigersterformdata$.next(true);
      console.log(this.registerform.value);

    }
    }
  


