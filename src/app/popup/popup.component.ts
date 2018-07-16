import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnDestroy {

  popOpen;
  constructor(private renderer: Renderer2, private sharedService: SharedService) {
    
    this.sharedService.forP.subscribe(pop=>this.popOpen=pop);
  
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'hidden-of');
  }

  closePop(){
    this.sharedService.popUp();
    this.renderer.removeClass(document.body, 'hidden-of');
  }



}
