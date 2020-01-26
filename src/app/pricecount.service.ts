import { Injectable } from '@angular/core';

@Injectable()
export class PricecountService {
total:number;
tax:number;
c:number;

totalcount(a:number,b:number)
{
  this.c = a + b;
  this.tax = this.c * 0.20;
  this.total = this.c + this.tax;
  return this.total;
}
  constructor() { }
}
