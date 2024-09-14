import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!:FormGroup ;

  constructor(private fb:FormBuilder){
    this.userForm=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
   })
  }
    
    ngOnInit(){
      
   }
   
    
    formvalues(){
      console.log(this.userForm.value);
      if(this.userForm.valid){
        this.userForm.reset();
      }
      
  }

}


