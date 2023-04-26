import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  carEditForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    typeCar: new FormControl('', [Validators.required]),
    garageName: new FormControl('', [Validators.required]),
    starLocation: new FormControl('', [Validators.required]),
    endLocation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[A-z]{@}^[A-z]{.com}')]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
  });

  constructor(private carService: CarService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.carService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.carEditForm.setValue(data);
    });
  }

  update() {
    this.carService.update(this.activatedRoute.snapshot.params.id, this.carEditForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('');
        this.snackBar.open('Update successfully!', 'OK');
      });
  }
}
