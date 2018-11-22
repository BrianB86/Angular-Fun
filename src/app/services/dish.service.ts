import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
<<<<<<< HEAD
=======

>>>>>>> eaed39f998eca9aff15a6fe736908079885777b6
    getDishes(): Promise<Dish[]> {
      return Promise.resolve(DISHES);
    }

    getDish(id: number): Promise<Dish> {
      return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    }

    getFeaturedDish(): Promise<Dish> {
      return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    }
}
