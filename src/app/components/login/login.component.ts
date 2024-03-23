import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    email: new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  get email(){
    return this.loginForm.get('email')
  }

  get pass(){
    return this.loginForm.get('pass')
  }


  login(){
    console.log(this.loginForm.value);
    
  }

 


}
