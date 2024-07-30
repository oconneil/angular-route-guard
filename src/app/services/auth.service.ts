import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  login(){
    this.isLoggedIn.next(true);
  }

  logout(){
    this.isLoggedIn.next(false);
  }

  isAuthenticated(): Observable<boolean>{
    return this.isLoggedIn.asObservable();
  }
}
