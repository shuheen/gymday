import { Injectable } from '@angular/core';
import { CategoryService } from './category-service.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  totalDiscount;
  subTotal$;
  serviceTaxAmount;
  SDep;
  grandTotal;
  forCarttf;
  forPopUp;



  private selectedPlan = new BehaviorSubject<{}>({});
  sharedObject = this.selectedPlan.asObservable();


  private selectedCat = new BehaviorSubject<string>("");
  sharedCat = this.selectedCat.asObservable();

  private selectedOffer = new BehaviorSubject<{}>("");
  sharedOffer = this.selectedOffer.asObservable();


  private subTotal = new BehaviorSubject<string>("");
  subTot = this.subTotal.asObservable();

  private discount = new BehaviorSubject<string>("");
  discountPrice = this.discount.asObservable();

  private service = new BehaviorSubject<string>("");
  sTax = this.service.asObservable();

  private grand = new BehaviorSubject<string>("");
  gTotal = this.grand.asObservable();

  private deposit = new BehaviorSubject<string>("");
  dep = this.deposit.asObservable();
  
  private forCart = new BehaviorSubject<Boolean>(false);
  forC = this.forCart.asObservable();

  private forPop = new BehaviorSubject<Boolean>(false);
  forP = this.forPop.asObservable();


  constructor(private categoryService: CategoryService) { }


  getObject(planS: {}){
    this.selectedPlan.next(planS)
  }

  getCategory(cat: string){
    this.selectedCat.next(cat)
  }

  shareOffer(off: {}){
    this.selectedOffer.next(off)
  }

  shareSubTotal(sub: string){
    this.subTotal.next(sub)
  }

  shareDiscountPrice(dis: string){
    this.discount.next(dis)
  }

  shareSTPrice(st: string){
    this.service.next(st)
  }

  shareDpPrice(dp: string){
    this.deposit.next(dp)
  }

  shareGT(gt: string){
    this.grand.next(gt)
  }

  shareForCart(tf:Boolean){
    this.forCart.next(tf);
  }

  shareForPop(pop:Boolean){
    this.forPop.next(pop);
  }


  calculateSubTotal(){
    let price = JSON.parse(localStorage.getItem('selectedPlanObj')).price;
    let discount = JSON.parse(localStorage.getItem('offerObj')).value;
    let sTaxRate = parseInt(localStorage.getItem('serviceTax'));
    let deposite = parseInt(localStorage.getItem('securityDeposit'));
    this.totalDiscount = (price*discount)/100;
    this.subTotal$ = price - this.totalDiscount;
    this.serviceTaxAmount = (this.subTotal$ * sTaxRate)/100;
    this.SDep = deposite;
    this.grandTotal = (this.subTotal$ + this.serviceTaxAmount + deposite);
    this.shareSubTotal(this.subTotal$);
    this.shareDiscountPrice(this.totalDiscount);
    this.shareSTPrice(this.serviceTaxAmount);
    this.shareGT(this.grandTotal);
    this.shareDpPrice(this.SDep);
    
  }


  passToCart(){
    if(this.forCarttf)
      this.forCarttf = false;
    else
      this.forCarttf = true;
    this.shareForCart(this.forCarttf);
  }

popUp(){
if(this.forPopUp)
    this.forPopUp = false;
else
    this.forPopUp = true;

    this.shareForPop(this.forPopUp);
}



}
