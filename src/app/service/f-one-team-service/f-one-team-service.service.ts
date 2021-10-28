import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { FOneTeam } from 'src/app/components/f-one-team/f-one-team';

@Injectable({
  providedIn: 'root'
})
export class FOneTeamServiceService {

  private url = 'http://localhost:8080/f1teams/'

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<any> {
    return this.http.get(this.url);
  }

  getTeam(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  addTeam(team: Object): Observable<Object> {
    return this.http.post(this.url, team);
  }


}
