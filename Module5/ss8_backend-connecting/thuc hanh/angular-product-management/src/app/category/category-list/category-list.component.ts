import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  deleteCategory: Category = {};
  searchForm = new FormControl();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAllCategory().subscribe(categories => this.categories = categories);
  }

  delModal(category: Category) {
    this.deleteCategory = category;
  }

  delCategory() {
    this.categoryService.deleteCategory(this.deleteCategory.id).subscribe(() =>{}, () =>{}, ()=>{this.ngOnInit()})
  }

  search() {
    const text = this.searchForm.value;
    this.categoryService.search(text).subscribe(results => this.categories = results);
    console.log(text)
  }
}
