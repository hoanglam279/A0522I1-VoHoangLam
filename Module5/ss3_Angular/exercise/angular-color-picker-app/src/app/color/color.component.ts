import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color: any;
  changeColor(color: string) {
    switch (color) {
      case 'orange':
        this.color = 'orange';
        break;
      case 'red':
        this.color = 'red';
        break;
      case 'blue':
        this.color = 'blue';
        break;
      case 'yellow':
        this.color = 'yellow';
        break;
      case 'violet':
        this.color = 'violet';
        break;
    }
  }
  color1:string = "color: ";
  bgColor:any;

  constructor() { }

  checkChoice(color:string) {
    this.bgColor = this.color1 + color;
  }

  ngOnInit(): void {
  }
}
