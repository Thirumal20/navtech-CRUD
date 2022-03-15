import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);


    // reset alerts on submit
    // this.alertService.clear();

    // // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }else{
      this.router.navigate(['/orders']);
      // this.accountService.loginCheck(this.loginForm.value).subscribe((res:any) => {
      //   console.log(res);
      //   this.router.navigate(['/orders']);
      // }, (error:any) => {
      //   console.log(error);
      // })
      // this.accountService.login(this.f.username.value, this.f.password.value)
    }

    // this.loading = true;
    // this.accountService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}
}
