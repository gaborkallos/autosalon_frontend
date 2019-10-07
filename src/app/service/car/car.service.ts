import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../../models/car/car';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8000',
    'Access-Control-Allow-Credentials': 'true',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = environment.apiUrl;
  cars: Observable<Car[]>;
  jsonObj: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  getCars(): Observable<Car[]> {
    this.cars = this.http.get<Car[]>(this.apiUrl + '/car_service.php', httpOptions);
    return this.cars;
  }

  findCar(jsonObj) {
    console.log(jsonObj);
    this.cars = this.http.post<Car[]>(this.apiUrl + '/car_service.php', jsonObj, httpOptions);
    return this.cars;
  }

}
