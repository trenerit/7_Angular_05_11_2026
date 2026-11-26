import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  imports: [],
  templateUrl: './details-user.html',
  styleUrl: './details-user.scss',
})
export class DetailsUser {

  private route = inject(ActivatedRoute);

  private idUser = this.route.snapshot.paramMap.get('id');
 
  ngOnInit() {
    console.log(this.idUser);
  }
}
