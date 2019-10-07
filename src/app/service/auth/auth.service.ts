import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Administrator} from '../../models/administrator/administrator';
import {environment} from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(admin: Administrator) {
    localStorage.setItem('name', 'Gabor');
    //
    // const url = `${environment.apiUrl}'/employee_service.php'`;
    // const json = {
    //   login: [admin.username, admin.password]
    // };
    // this.http.post(url, json, {observe: 'response'})
    //   .subscribe(response => {
    //     console.log(response);
    //   });
    this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.clear();
    this.currentUser = localStorage.getItem('name');
  }

  isLoggedIn(): boolean {
    this.currentUser = localStorage.getItem('name');
    if (this.currentUser == null) {
      return false;
    }
    return true;
  }
}
