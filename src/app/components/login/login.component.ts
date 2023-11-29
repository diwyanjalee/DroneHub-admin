import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email ="";
  //password = "";
  constructor(private loginService: LoginService, 
    private router: Router,
    public fb: FormBuilder
     ) { }

  ngOnInit(): void {
  }

  logUser () {
    // console.log("eeemail : " , this.email)
    this.loginService.signIn(this.email, '').then((res) =>{
      console.log(res.user.uid)
      if (res.user.uid) {
        this.router.navigate(['/']);
      }
      
    })
  }

  loginForm = new FormGroup ({
    user:     new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  }
  )

  loginUser() {
    console.warn(this.loginForm.value)
  }

  get user() 
  {
    return this.loginForm.get('user')
  }

  get password() 
  {
    return this.loginForm.get('password')
  }

  testLogin() {
    console.log("---------xxxxxxxxx-----",this.loginForm.value)
    this.loginService.signIn(this.email,'').then((res) =>{
      console.log(res.user.uid)
      if (res.user.uid) {
        console.log("---------yyyyyy---------");
        this.router.navigate(['/home']);
      }
      else {
        console.log("--------------------zzzzzzzzzzzzzz")
      }
      
    }).catch(err => {
      console.log("-------Tttttttttttttttttt")
    })
  }

}
