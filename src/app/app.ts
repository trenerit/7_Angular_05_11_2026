import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formularze } from './formularze/formularze';
import { If } from './if/if';
import { For } from './for/for';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formularze, If, For],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected imie = "Piotr";
  protected nazwisko = "Kania";

  clickBtn() {
    this.imie = "Anna";
    console.log(`${this.imie} ${this.nazwisko}`);
  }

}
