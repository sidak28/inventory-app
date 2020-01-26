import { Component, OnInit } from '@angular/core';
import { PricecountService } from '../pricecount.service';

@Component({
  selector: 'app-billingshow',
  templateUrl: './billingshow.component.html',
  styleUrls: ['./billingshow.component.css']
})
export class BillingshowComponent implements OnInit {
  serverElements = [];
  bName:string = "";
  bName1:string = "";
  bName2:string;
  bName3:string;
  totalbill:number;
  valid:boolean;
  constructor(public obj:PricecountService) { 
    
  }

  ngOnInit() {
  }

  checkValid(){
    if(this.bName && this.bName1 && this.bName2 && this.bName3 != ""){
      this.onClickButton();
    }
  }
 
  onClickButton() {

    this.totalbill=this.obj.totalcount(parseInt(this.bName2),parseInt(this.bName3));
    this.serverElements.push({
      type: 'server',
      name: this.bName,
      name1: this.bName1,
      price1:this.bName2,
      price2:this.bName3,
      totalb:this.totalbill
    });
  }

}
