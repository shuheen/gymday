import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CategoryService } from './../category-service.service';
import { getTestBed } from '@angular/core/testing';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html',
  styleUrls: ['./point-of-sale.component.css']
})
export class PointOfSaleComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;
  @ViewChild('tabgroup') tagGroup: HTMLSelectElement; 
  categories$;
  searchResult;
  searchListOpen = false;
  selectedUser;
  selectedUserElem = false;
  today = new Date().getTime();
  couponsList;
  selectedTabIndex;
  selectedTabName;
  selectedOffer;
  constructor(private categoryService: CategoryService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getCategories();
    this.getCouponsList();
  }
  
  ngAfterViewInit() {
    this.selectedTabIndex = this.tagGroup._selectedIndex;
    if(this.selectedTabIndex == "0"){
      this.selectedTabName = "Gymnasium";
    }else if(this.selectedTabIndex == "1"){
      this.selectedTabName = "Swimming";
    }else if(this.selectedTabIndex == "2"){
      this.selectedTabName = "Yoga";
    }else{
      this.selectedTabName = "Tennis";
    }
     
    this.sharedService.getCategory(this.selectedTabName);
  }


  getCategories(){
    this.categories$ = this.categoryService.categories;
  }

  getSearchResult(event){
    let queryText = event.target.value.toLowerCase();
    if(queryText){
      this.searchListOpen = true;
    }else{
      this.searchListOpen = false;
    }
    let allUsers = this.categoryService.getUsers();
    this.searchResult = allUsers.filter(item => item.firstName.toLowerCase().indexOf(queryText) !== -1 || item.phone.toString().indexOf(queryText) !== -1);
  }


  getUserDetailsById(userId){
    this.selectedUserElem = true;
    let allUsers = this.categoryService.getUsers();
    this.selectedUser = allUsers.find(item =>  item.id.toString().indexOf(userId) !== -1);
    this.searchListOpen = false;
    this.sharedService.passToCart();
  }

  closeSelectedUser(){
    this.selectedUserElem = false;
    this.input.nativeElement.value = "";
    this.sharedService.passToCart();
  }

  getCouponsList(){
    this.couponsList = this.categoryService.getCoupons();
  }

  getOffer(e){
    let discount = 0
    if(e.value){
      discount = e.value;
    }

    let offerObj = {
      name: e.triggerValue,
      value: discount
    }

    this.sharedService.shareOffer(offerObj);
    localStorage.setItem('offerObj', JSON.stringify(offerObj));

    this.sharedService.calculateSubTotal();
  }
}
