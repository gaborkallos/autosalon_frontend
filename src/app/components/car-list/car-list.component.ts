import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car/car';
import {CarService} from '../../service/car/car.service';
import {Administrator} from '../../models/administrator/administrator';
import {AuthService} from '../../service/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carSearcForm: FormGroup;
  private cars: Car[] = [];
  private admin: Administrator;
  private jsonObj;

  constructor(
    private carService: CarService,
    private authService: AuthService,
    public formbuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => (
      this.cars = cars
    ));
    this.carSearcForm = this.formbuilder.group({
      manufacture: [''],
      model: [''],
      year: [''],
    });
  }

  findCar() {
    const search = this.carSearcForm.value;
    if (search.manufacture !== '') {
      this.jsonObj = {manufacture: search.manufacture};
      this.carService.findCar(this.jsonObj);
    }
    if (search.model !== '') {
      this.jsonObj = {model: search.model};
      this.carService.findCar(this.jsonObj);

    }
    if (search.year !== '') {
      console.log(search.year);
      this.jsonObj = {year: search.year};
      this.carService.findCar(this.jsonObj);

    }
    this.carSearcForm.reset();
  }
}
