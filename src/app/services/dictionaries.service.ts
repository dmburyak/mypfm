import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DictionariesService {

  // categoriesDic = [
  //   {flat: 'Квартира'},
  //   {kindergarten: 'Детский сад'},
  //   {food: 'Еда'},
  //   {dress: 'Одежда'},
  //   {medicine: 'Медицина'},
  //   {toys: ['Игрушки и', 'развлечения']},
  //   {other: 'Другое'},
  // ]

  categoriesDic = {
    flat: 'Квартира',
    kindergarten: 'Детский сад',
    food: 'Еда',
    dress: 'Одежда',
    medicine: 'Медицина',
    toys: ['Игрушки и', 'развлечения'],
    other: 'Другое'
}

  monthsDic = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ]

  getCategoriesKeys() {
    //
    // const categoriesKeyArray: string[] = [];
    // this.categoriesDic.forEach(item => {
    //
    //     for (let key in item) {
    //       categoriesKeyArray.push(key)
    //     }
    //
    //   }
    // )
    return Object.keys(this.categoriesDic);
  }

  getCategoriesNames(): (string | string[])[] {
    // const categoriesKeyArray: string[] = [];
    // this.categoriesDic.forEach(item => {
    //
    //     for (let key in item) {
    //       // @ts-ignore
    //       categoriesKeyArray.push(item[key])
    //     }
    //
    //   }
    // )
    return Object.values(this.categoriesDic);
  }

}
