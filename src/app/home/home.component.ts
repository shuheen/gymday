import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:['selectedPlantoCart']
})
export class HomeComponent implements OnInit {
  serviceTax = 15;
  securityDesposit = 2000;
  constructor() { }

  ngOnInit() {
    let offerObj = {
      name:"No Coupon Selected",
      value:"0"
    }
     localStorage.setItem('offerObj', JSON.stringify(offerObj));

    localStorage.setItem('serviceTax', this.serviceTax.toString());
    localStorage.setItem('securityDeposit', this.securityDesposit.toString())
  }

}
