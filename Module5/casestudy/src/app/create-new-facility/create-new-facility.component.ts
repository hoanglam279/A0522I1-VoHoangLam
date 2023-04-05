import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-new-facility',
  templateUrl: './create-new-facility.component.html',
  styleUrls: ['./create-new-facility.component.css']
})
export class CreateNewFacilityComponent implements OnInit {
facilityForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.facilityForm = this.fb.group({
      facilityId: ['',[Validators.required]],
      facilityName: ['',[Validators.required]],
      area: ['',[Validators.required, Validators.min(0)]],
      cost: ['',[Validators.required, Validators.min(0)]],
      maxPeople: ['',[Validators.required, Validators.min(0)]],
      standardRoom: ['',[Validators.required]],
      description: ['',[Validators.required]],
      poolArea: ['',[Validators.required, Validators.min(0)]],
      numberOfFloors: ['',[Validators.required, Validators.min(0)]],
      rentType: ['',[Validators.required]],
      facilityType: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
