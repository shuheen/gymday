import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  json;
  subplans;
  users;
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
    id:1,
    duration: '1 Month',
    price: 4400,
    plan: 'Standard',
  },
  {
    id:2,
    duration: '3 Months',
    price: 11500,
    plan: 'Standard',
  },
  {
    id:3,
    duration: '6 Months',
    price: 20000,
    plan: 'Standard',
  },
  {
    id:4,
    duration: '9 Months',
    price: 28000,
    plan: 'Standard',
  },
  {
    id:5,
    duration: '12 Months',
    price: 35000,
    plan: 'Standard',
  },
  {
    id:6,
    duration: '3 Months',
    price: 12500,
    plan: 'Premium',
  },
  {
    id:7,
    duration: '6 Months',
    price: 19000,
    plan: 'Premium',
  },
  {
    id:8,
    duration: '9 Months',
    price: 27000,
    plan: 'Premium',
  },
  {
    id:9,
    duration: '12 Months',
    price: 32000,
    plan: 'Premium',
  },
  {
    id:10,
    duration: '1 Week',
    price: 8000,
    plan: 'Guest',
  },
  {
    id:11,
    duration: '1 Month',
    price: 18000,
    plan: 'Guest',
  }
  ]



  usersList = [
    {
      id: 1,
      firstName: 'Shoaib',
      lastName: 'Khan',
      phone: 8826772010,
      status: 'issue',
      type: 'Member'
    },
    {

      id: 2,
      firstName: 'Anil',
      lastName: 'Kumar',
      phone: 9897969594,
      status: 'active',
      type: 'Member'
    },
    {

      id: 3,
      firstName: 'Anshul',
      lastName: 'Jalan',
      phone: 8542343010,
      status: 'inactive',
      type: 'Member'
    },
    {

      id: 4,
      firstName: 'Anjali',
      lastName: 'Sharma',
      phone: 9875372010,
      status: 'hot',
      type: 'Member'
    },
    {
      id: 5,
      firstName: 'Antara',
      lastName: 'Verma',
      phone: 8826124010,
      status: 'cold',
      type: 'Member'
    },
    {
      id: 6,
      firstName: 'Luckshya',
      lastName: 'Dagar',
      phone: 8236779010,
      status: 'issue',
      type: 'Member'
    },
    {
      id: 7,
      firstName: 'Srishti',
      lastName: 'Jain',
      phone: 8824852010,
      status: 'issue',
      type: 'Member'
    }
    ,
    {
      id: 8,
      firstName: 'Anmol',
      lastName: 'Kaul',
      phone: 9284772010,
      status: 'issue',
      type: 'Member'
    },
    {
      id: 9,
      firstName: 'Abhinav',
      lastName: 'Misra',
      phone: 9231272010,
      status: 'hot',
      type: 'Member'
    },
    {
      id: 10,
      firstName: 'Mansi',
      lastName: 'Gupta',
      phone: 9328748579,
      status: 'inactive',
      type: 'Member'
    },
    {
      id: 11,
      firstName: 'Isha',
      lastName: 'Sharma',
      phone: 989394989,
      status: 'active',
      type: 'Member'
    },
    {
      id: 12,
      firstName: 'Shravan',
      lastName: 'Sethi',
      phone: 9218768534,
      status: 'cold',
      type: 'Member'
    },
    {
      id: 13,
      firstName: 'Anjana',
      lastName: 'Thakur',
      phone: 8829837010,
      status: 'active',
      type: 'Member'
    },
    {
      id: 14,
      firstName: 'Muazzam',
      lastName: 'Siddiqui',
      phone: 8823462010,
      status: 'issue',
      type: 'Member'
    },
    {
      id: 15,
      firstName: 'Matin',
      lastName: 'Warsi',
      phone: 8823457010,
      status: 'hot',
      type: 'Member'
    }
  ]


  coupons = [
    {
      name: 'CORPORATE10',
      discount: 10
    },
    {
      name: 'FIRST15',
      discount: 15
    },
    {
      name: 'FLAT10',
      discount: 10
    },
    {
      name: 'DIWALI5',
      discount: 5
    },
  ]

  constructor() { }


  getData() {
    return this.categories.map(res => this.json = res);
  }

  getSubPlans() {
    return this.Subplan.map(res => this.subplans = res)
  }

  getUsers() {
    return this.usersList.map(res => this.users = res);
  }
  getCoupons(){
    return this.coupons;
  }




}
