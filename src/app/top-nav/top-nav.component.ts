import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  searchResult;
  searchListOpen = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
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
  

}
