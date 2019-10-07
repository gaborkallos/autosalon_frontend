import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car/car';
import {CarService} from '../../service/car/car.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isCars = false;

  constructor(private carService: CarService, private authService: AuthService) {
  }

  ngOnInit() {
  }

}
