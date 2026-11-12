import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.html',
  styleUrl: './for.scss',
})
export class For {

  protected forTab = [
    {id:1, login: 'pkania', boss: true},
    {id:2, login: 'anowak', boss: false},
    {id:3, login: 'jkowalski', boss: false},
  ]

}
