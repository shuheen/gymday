import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnChanges, Renderer2  } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedCat;
  selectedPlan;
  selectedOffer;
  discountPrice;
  subTotal;
  serviceTaxAmount;
  securityDeposit;
  grandTotal;
  forCart;

  constructor(private sharedService: SharedService, private cdRef:ChangeDetectorRef, private renderer: Renderer2) { }

  async ngOnInit() {
    await this.sharedService.sharedObject.subscribe(selectPlan=>this.selectedPlan = selectPlan);
    this.sharedService.sharedOffer.subscribe(offer=>this.selectedOffer=offer);
    this.sharedService.subTot.subscribe(st=>this.subTotal=st);
    this.sharedService.discountPrice.subscribe(dc=>this.discountPrice = dc);
    this.sharedService.sTax.subscribe(st=>this.serviceTaxAmount=st);
    this.sharedService.dep.subscribe(dp=>this.securityDeposit=dp);
    this.sharedService.gTotal.subscribe(gt=>this.grandTotal=gt);
    this.sharedService.forC.subscribe(fc=>this.forCart=fc);
  }
  ngAfterViewInit(){
    this.sharedService.sharedCat.subscribe(cat=>this.selectedCat=cat);
    this.cdRef.detectChanges();
  }

  paymentDone(){
    this.renderer.addClass(document.body, 'hidden-of');
    this.sharedService.popUp();
    // this.sharedService.passToCart();
  }


  
  

}
