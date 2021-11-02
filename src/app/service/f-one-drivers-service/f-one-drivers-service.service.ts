import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FOneDriversServiceService {

  private url = 'http://localhost:8080/f1drivers/'

  constructor(private http: HttpClient) { }

  getDriver(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDriver(id: number, driver: Object): Observable<Object> {
    return this.http.put(this.url + id, driver);
  }

  
}
