import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category-service.service';

@Component({
  selector: 'app-gymnasium',
  templateUrl: './gymnasium.component.html',
  styleUrls: ['./gymnasium.component.css']
})
export class GymnasiumComponent implements OnInit {
  categories$;
  plans$;
  subplans$;
  filteredPlans;
  selectedPlan;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCatagories();
    this.getPlans();
    this.getSubPlans();
    this.filterData("Standard");
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
   // console.log(this.subplans$);
    this.filteredPlans = this.subplans$.filter(item => item.plan.toLowerCase().indexOf(query) !== -1);
    this.selectedPlan = e
    console.log(this.selectedPlan);
  }

}
