import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private http = inject(HttpClient);
  private apiUrl = `https://${environment.apiHost}/v3`;

  private headers = new HttpHeaders({
    'x-rapidapi-key': environment.apiKey,
    'x-rapidapi-host': environment.apiHost
  });

  searchPlayer(name: string, season: number = 2026): Observable<any> {
    const params = new HttpParams()
      .set('search', name)
      .set('season', season.toString());

    return this.http.get(`${this.apiUrl}/players`, {
      headers: this.headers,
      params: params
    });
  }
}