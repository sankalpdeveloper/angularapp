import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any = {}
  submitted = false
  returnUrl: string
  constructor(
    private router: Router,
    private loginService: UserService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  
  Submit() {
    this.submitted = true
    this.loginService.login(this.users.email, this.users.password).subscribe(
      (res : any) => {
        if ((res.status == 200)) {
          //store token in localstorage
          localStorage.setItem('token', res.token)
          localStorage.setItem('email',this.users.email)
          this.router.navigateByUrl('/home')
          this.toastr.success('Login Successfully', 'Success!');          
        }else{
          this.toastr.error('Invalid Username or Password', 'Error!');
        }
      },
      (error) => {
        this.toastr.error('Email not exist.', 'Error!');
        console.log(error)
      },
    )
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.authService,"Google Data")
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(this.authService,"Facebook Data")
  } 
}
