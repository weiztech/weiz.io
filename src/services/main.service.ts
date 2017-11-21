import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MainService {

  constructor(private http: HttpClient) {}

  people(): Observable<any> {
    return this.http.get('https://swapi.co/api/people/');
  }
}
