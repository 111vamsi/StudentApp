import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ICity } from './city.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities: ICity[] = [
    {
      id: 20,
      name: 'New York',
      picture: 'assestsimage\newy.jpeg',
    },
    {
      name: 'New Jersy',
      id: 21,
      picture: 'assestsimage\newy1.jpeg',
    },
    {
      name: 'Albama',
      id: 22,
      picture: 'assestsimage\newy2.jpeg',
    },
    {
      name: 'Taxes',
      id: 23,
    },
  ];
}
