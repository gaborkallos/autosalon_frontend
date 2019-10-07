import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private currentUser: string;
  private isLoggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogout(){
    this.authService.logout();
  }

}
