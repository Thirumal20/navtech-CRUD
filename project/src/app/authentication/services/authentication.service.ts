import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject!: BehaviorSubject<LoginModel>;
  public currentUser: Observable<LoginModel>;
  // currentUser = this.currentUserSubject.asObservable();
  loginData!: LoginModel;
  loginApi: string ='http://localhost:3000/'
  constructor(private http: HttpClient,     private router: Router) {
      this.currentUserSubject   = new BehaviorSubject<LoginModel>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginModel {
    // console.log(this.currentUserSubject);

    return this.currentUserSubject.value;
}

loginCheck(data:any) {
  return this.http.post<any>( this.loginApi + `login`, data)
  .pipe(map((user: any) => {
      console.log(user);

if (user.length) {
  this.currentUserSubject.next(user);
  localStorage.setItem('currentUser', JSON.stringify(user));
  this.sucessAlert('Sucessfully Logged In')
}else{
this.errorAlertLogin();
// localStorage.setItem('currentUser', JSON.stringify(user));
}

      return user;
  }));
}

loginFormSubmit(userData:any) {
  return this.http.post<any>(this.loginApi + `register` , userData ).pipe(map((res:any) => {
this.sucessAlert('User Registered Sucessfully')
    return res;
  }, (error:any) => {
    this.errorAlert();
    return error;
  }))
}
sucessAlert(message: any){
  Swal.fire({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500
  })
}

errorAlertLogin(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'UserName or Password is wrong!',
    timer: 1500
  })
}
errorAlert(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    timer: 1500
  })
}

  changeMovieStatus(status: any) {
    // this.currentUserSubject.next(status)
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null!);
    this.router.navigate(['/login']);
}
}
