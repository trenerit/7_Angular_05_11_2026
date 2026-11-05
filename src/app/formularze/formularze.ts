import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularze',
  imports: [FormsModule],
  templateUrl: './formularze.html',
  styleUrl: './formularze.scss',
})
export class Formularze {

  imie = '';

  formSubmit(dataFromForm: any) {
    console.log(dataFromForm.value.imie);
    this.imie = dataFromForm.value.imie;
  }

}
