import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFacilityComponent } from './create-new-facility.component';

describe('CreateNewFacilityComponent', () => {
  let component: CreateNewFacilityComponent;
  let fixture: ComponentFixture<CreateNewFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
