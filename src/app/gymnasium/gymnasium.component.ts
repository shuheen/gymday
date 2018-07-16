import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-gymnasium',
  templateUrl: './gymnasium.component.html',
  styleUrls: ['./gymnasium.component.css'],
  inputs:['selectedPlantoCart']
})
export class GymnasiumComponent implements OnInit {
  categories$;
  plans$;
  subplans$;
  filteredPlans;
  selectedPlan;
  selectedPlantoCart: {};
  totalDiscount;
  subTotal$;



  constructor(private categoryService: CategoryService, private sharedService: SharedService  ) { }


  ngOnInit() {
    this.getCatagories();
    this.getPlans();
    this.getSubPlans();
    this.filterData("Standard");
    this.passPlan(1);
  }


  getCatagories(){
    this.categories$ = this.categoryService.getData();
  }
  getPlans(){
    this.plans$ = this.categoryService.Plans;
  }
  getSubPlans(){
    this.subplans$ = this.categoryService.getSubPlans()
  }

  filterData(e) {
    let query = e.toLowerCase();
    this.filteredPlans = this.subplans$.filter(item => item.plan.toLowerCase().indexOf(query) !== -1);
    this.selectedPlan = e
  }

  getPlanById(planId){
    let filteredPlans = this.filteredPlans;
    this.selectedPlantoCart =  filteredPlans.find(item =>  item.id.toString().indexOf(planId) !== -1);
    localStorage.setItem('selectedPlanObj', JSON.stringify(this.selectedPlantoCart));
  }

  passPlan(planId){
    this.getPlanById(planId)
    this.sharedService.getObject(this.selectedPlantoCart);
    this.sharedService.calculateSubTotal();
  }

  // subTotal(){
  //   let price = JSON.parse(localStorage.getItem('selectedPlanObj')).price;
  //   let discount = JSON.parse(localStorage.getItem('offerObj')).value;

  //   this.totalDiscount = (price*discount)/100;
    
  //   this.subTotal$ = price - this.totalDiscount;
  //   localStorage.setItem('subTotal', this.subTotal$);
  //   this.sharedService.shareSubTotal(this.subTotal$);
  // }
}
