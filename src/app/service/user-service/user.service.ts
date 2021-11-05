import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/users/'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post(this.url, user);
  }

  updateUser(id: number, user: Object): Observable<Object> {
    return this.http.put(this.url + id, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(this.url + id);
  }
}
