import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator = {
    displayValue: '0',
    firstOperand: 0,
    secondOperand: 0,
    dot: false,
    tmp:0,
    operator: null,
  };

  dem (n:number):number{
    let d=1;
    while (n>=10){
      d++;
      n/=10;
    }
    return d;
  }

  nhanso(n:number):number{
    let kq=1;
    while (n>0){
      kq*=10;
      n--;
    }
    return kq;
  }
  inputDigit(n){
    if(this.calculator.operator==null||this.calculator.firstOperand==0){
      if(this.calculator.dot==true){
        this.calculator.tmp=this.calculator.tmp*10+n;
        this.calculator.firstOperand=(this.calculator.firstOperand *this.nhanso(this.dem(this.calculator.tmp))+this.calculator.tmp)/this.nhanso(this.dem(this.calculator.tmp));
      }else {
        this.calculator.firstOperand=this.calculator.firstOperand*10+n;
      }
      this.calculator.displayValue=this.calculator.firstOperand+"";
    }else {
      if(this.calculator.dot==true){
        this.calculator.tmp=this.calculator.tmp*10+n;
        this.calculator.secondOperand=(this.calculator.secondOperand *this.nhanso(this.dem(this.calculator.tmp))+this.calculator.tmp)/this.nhanso(this.dem(this.calculator.tmp));
      }else {
        this.calculator.secondOperand=this.calculator.secondOperand*10+n;
      }
      this.calculator.displayValue = this.calculator.secondOperand +"";
    }
  }
  Operator(operator){
    if(this.calculator.firstOperand==0){
      this.calculator.operator=null;
    }
    else {
      this.calculator.displayValue=operator;
      this.calculator.operator=operator;
    }
    this.calculator.dot=false;
    this.calculator.tmp=0;
  }


  calculate() {
    let rs=0;
    if(this.calculator.secondOperand==0){
      rs=this.calculator.firstOperand;
    }else{
      switch (this.calculator.operator) {
        case '+':rs=this.calculator.secondOperand + this.calculator.firstOperand;
          break;
        case '-': rs=this.calculator.firstOperand - this.calculator.secondOperand;
          break;
        case '*':  rs=this.calculator.firstOperand * this.calculator.secondOperand;
          break;
        case '/':  rs=this.calculator.firstOperand / this.calculator.secondOperand;
          break;
      }
    }
    this.calculator.tmp=0;
    this.calculator.firstOperand=rs;
    this.calculator.secondOperand=0;
    this.calculator.displayValue=rs.toFixed(2)+"";
    this.calculator.operator = null;
    this.calculator.dot=false;
  }
  Clear(){
    this.calculator.firstOperand=0;
    this.calculator.secondOperand=0;
    this.calculator.operator=null;
    this.calculator.displayValue='0';
    this.calculator.dot=false;
    this.calculator.tmp=0;
  }
  Dot(dot){

    if(this.calculator.firstOperand)
      if(this.calculator.firstOperand==0&&this.calculator.secondOperand==0){
        return;
      }
    if(this.calculator.operator!=null){
      this.calculator.displayValue=this.calculator.secondOperand+".";
    }else{
      this.calculator.displayValue=this.calculator.firstOperand+".";
    }
    this.calculator.dot=true;
  }
}
