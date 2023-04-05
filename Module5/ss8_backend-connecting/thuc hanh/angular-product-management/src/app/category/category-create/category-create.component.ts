import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm = new FormControl;

  constructor(private categoryService: CategoryService,private router: Router) {

  }

  ngOnInit(): void {
  }

  submit() {
    const name = this.categoryForm.value;
    const newCategory: Category = new class implements Category {
      name = name
    }
    this.categoryService.createCategory(newCategory).subscribe(() => {}, ()=>{}, ()=>{this.router.navigateByUrl('/category/list')})
  }
}
