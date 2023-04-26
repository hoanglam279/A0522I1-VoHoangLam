import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CarService} from '../../service/car.service';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p = 1;
  cars: any = [];
  nameSearch: string;
  data: string;

  constructor(private carService: CarService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(
      (res) => {
        this.cars = res;
      });
  }

  openDialogDelete(customerId: number) {
    this.carService.findById(customerId).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(DeleteComponent, {
          width: '700px',
          data: {datal: data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.carService.findByName(this.nameSearch).subscribe((data) => {
      this.cars = data;
    });
  }

}
