import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
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
