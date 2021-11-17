import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '@entities/interface.entites';

@Injectable({
  providedIn: 'root',
})
export class ChuckJokesService {
  URL_FROM = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.URL_FROM + '/categories');
  }

  getJoke(category: string): Observable<Joke> {
    return this.http.get<Joke>(this.URL_FROM + `/random?category=${category}`);
  }
}
