import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [
    {
      facilityId: 1,
      facilityName: 'Villa',
      area: 700,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      poolArea: 300,
      numberOfFloors: 0,
      rentType: 1,
      facilityType: 1
    },
    {
      facilityId: 2,
      facilityName: 'House',
      area: 500,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      poolArea: 200,
      numberOfFloors: 0,
      rentType: 1,
      facilityType: 1
    },
    {
      facilityId: 2,
      facilityName: 'Room',
      area: 300,
      cost: 1000,
      maxPeople: 10,
      standardRoom: 'VIP',
      description: 'des',
      numberOfFloors: 0,
      rentType: 1,
      facilityType: 1
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
