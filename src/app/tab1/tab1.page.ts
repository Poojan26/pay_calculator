import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Variable declaration 
  hours; 
  hrRate; 

  regular = 0; 
  overtime = 0; 
  total = 0; 
  tax = 0; 
  netIncome = 0; 


  constructor() {}

  // Method to calculate pay 
  Calculate(){

    // Number of hours less than 40 condition 
    if(this.hours <= 40){
      // Regular pay according to hours and no overtime pay 
      this.regular = this.hours * this.hrRate;
      this.overtime = 0;
    }
    else{

    // Regular pay and overtime
    this.regular = this.hours * this.hrRate;
    this.overtime = (this.hours - 40) * this.hrRate*1.5 + 40 * this.hrRate;
    }

    // Tax calculation 
    this.tax = this.regular * 0.18;

    // total pay 
    this.total = this.regular + this.overtime;
    
    // Net income 
  }



}
