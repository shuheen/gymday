import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CustomFormsModule } from 'ng2-validation';
import { RouterModule, Routes } from '@angular/router';


import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {TabViewModule} from 'primeng/tabview';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { PointOfSaleComponent } from './point-of-sale/point-of-sale.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';
import { CategoryService} from './category-service.service';
import { GymnasiumComponent } from './gymnasium/gymnasium.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { YogaComponent } from './yoga/yoga.component';
import { TennisComponent } from './tennis/tennis.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    PointOfSaleComponent,
    BillingHistoryComponent,
    GymnasiumComponent,
    SwimmingComponent,
    YogaComponent,
    TennisComponent,
    CartComponent
  ],
  imports: [
  
  BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatTabsModule,
    MatSelectModule,
    TabViewModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    RouterModule.forRoot(
      [
        {
          path: '', component: HomeComponent
        },
      ]
    )
  ],
  providers: [
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
