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
  salary = 0; 
  
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

    // total pay 
    this.total = this.regular + this.overtime;

    // Tax on total pay 
    this.tax = this.total * 0.18
    
    // Salary after tax deduction 
    this.salary = this.total - this.tax
    }



}
