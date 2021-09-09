import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  categories = [
    'Квартира',
    'Детский сад',
    'Еда',
    'Одежда',
    'Медицина',
    ['Игрушки и', 'развлечения'],
    'Другое'
  ];

  constructor() {
  }

}
