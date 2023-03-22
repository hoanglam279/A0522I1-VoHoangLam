import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import {Rate} from '../rate';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  constructor() {
  }

  value = 0;
  @Output()
  getPoint: EventEmitter<number> = new EventEmitter<number>();

  rate: Rate = {
    value: 0,
    active: true
  };

  ngOnInit(): void {
  }

  Point(value: any) {
    this.value = value;
    this.getPoint.emit(this.value);
    for (let i = value; i <= 10; i++) {
      this.rate.active = false;
    }
  }
}
