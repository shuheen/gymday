import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from './../category-service.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html',
  styleUrls: ['./point-of-sale.component.css']
})
export class PointOfSaleComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;
  categories$;
  searchResult;
  searchListOpen = false;
  selectedUser;
  selectedUserElem = false;
  today = new Date().getTime();
  couponsList;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
    this.getCouponsList();
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
  }

  closeSelectedUser(){
    this.selectedUserElem = false;
    this.input.nativeElement.value = "";
  }

  getCouponsList(){
    this.couponsList = this.categoryService.getCoupons();
  }
}
