import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  json;
  subplans;
  categories = [{
    name: 'Gymnasium',
  }, {
    name: 'Swimming',
  }, {
    name: 'Yoga',
  }, {
    name: 'Tennis',
  }]


  Plans = [{
    name: 'Standard',
  },
  {
    name: 'Premium',
  },
  {
    name: 'Guest',
  }]

  Subplan = [{
      duration: '1 Month',
      price: 4400,
      plan: 'Standard',
    },
    {
      duration: '3 Months',
      price: 11500,
      plan: 'Standard',
    },
    {
      duration: '6 Months',
      price: 20000,
      plan: 'Standard',
    },
    {
      duration: '9 Months',
      price: 28000,
      plan: 'Standard',
    },
    {
      duration: '12 Months',
      price: 35000,
      plan: 'Standard',
    },
    {
      duration: '3 Months',
      price: 12500,
      plan: 'Premium',
    },
    {
      duration: '6 Months',
      price: 19000,
      plan: 'Premium',
    },
    {
      duration: '9 Months',
      price: 27000,
      plan: 'Premium',
    },
    {
      duration: '12 Months',
      price: 32000,
      plan: 'Premium',
    }
    ,
    {
      duration: '1 Week',
      price: 8000,
      plan: 'Guest',
    },
    {
      duration: '1 Month',
      price: 18000,
      plan: 'Guest',
    }
  ]
  constructor() { }


  getData() {
    return this.categories.map(res => this.json = res);
  }

  getSubPlans(){
    return this.Subplan.map(res => this.subplans = res)
  }



}
