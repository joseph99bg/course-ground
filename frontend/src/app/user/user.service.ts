import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(
    private http: HttpClient,
  ) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser;
  }

  registerUser(data) {
    this.http.post<IUser>('http://localhost:8080/api/user/register', data).subscribe();
  }

  login(data) {
    this.http.post<IUser>('http://localhost:8080/api/user/login', data).subscribe(user => {
      localStorage.setItem('current-user', user.username);
      localStorage.setItem('current-user-id', user._id);
      this.currentUser = user.username;
    });
  }

  logout() {
    this.http.post('http://localhost:8080/api/user/logout', null).subscribe();
    this.currentUser = null;
    localStorage.removeItem('current-user');
    localStorage.removeItem('current-user-id');
  }
}
