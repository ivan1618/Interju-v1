import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '@entities/interface.entites';

@Injectable({
  providedIn: 'root',
})
export class ChuckJokesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }
  
  getJoke(category: string): Observable<Joke> {
    return this.http.get<Joke>(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  }
}
