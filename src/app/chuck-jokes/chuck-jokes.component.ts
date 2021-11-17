import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChuckJokesService } from '@services/chuck-jokes.service';
import { Joke } from '@entities/interface.entites';

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.scss'],
})
export class ChuckJokesComponent implements OnInit, OnDestroy {
  jokeCategories: string[] = [];
  joke?: Joke;
  choosenIndex?: number;
  categorySubscription?: Subscription;
  jokeSubscription?: Subscription;

  constructor(private jokeService: ChuckJokesService) {}

  ngOnInit(): void {
    this.categorySubscription = this.jokeService.getCategories().subscribe(
      (response) => (this.jokeCategories = response),
      () => alert('The page is unavailable!')
    );
  }

  selectCategory(index: number) {
    this.joke = undefined;
    this.choosenIndex = index;
    this.jokeSubscription = this.jokeService
      .getJoke(this.jokeCategories[index])
      .subscribe(
        (response) => (this.joke = response),
        () => alert('The page is unavailable!')
      );
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
    if (this.jokeSubscription) {
      this.jokeSubscription.unsubscribe();
    }
  }
}
