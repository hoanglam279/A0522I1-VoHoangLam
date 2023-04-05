import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category = {};
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      id: '',
      name: ''
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = parseInt(paramMap.get('id'));
      this.categoryService.findCategoryById(id).subscribe((category) => {this.category = category;
        this.setValue();
      });
    } )
  }

  private setValue() {
    this.categoryForm.controls['id'].setValue(this.category.id);
    this.categoryForm.controls['name'].setValue(this.category.name);
  }

  editCategory() {
    const category = this.categoryForm.value;
    this.categoryService.editCategory(category.id, category).subscribe(()=>{}, ()=>{},()=>{this.router.navigateByUrl('/category/list')});
  }
}
