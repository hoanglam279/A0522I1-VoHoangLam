import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: number;
  product: Product;
  products: Product[] = [];
  categorys: Category[] = [];
  tesst = null;

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.pattern('')),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
  });

  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = Number(paraMap.get('id'));
    });
  }

  getAll() {
    this.categoryService.getAll().subscribe(next => {
      this.categorys = next;
      console.log(this.categorys);
    });
    this.productService.getAll().subscribe(next => {
      this.products = next;
      console.log(this.products);
    });
    this.productService.findProductById(this.id).subscribe(next => {
      this.product = next;
      this.productForm.patchValue(this.product);
      this.tesst = this.productForm.controls.category.value.name;
      console.log(this.tesst);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  submit() {
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product).subscribe(next => {
        this.products = next;
        this.ngOnInit();
      }, error => {
      }
    );
    this.router.navigateByUrl('product/list');

  }

  Back() {
    this.router.navigateByUrl('product/list');
  }
}
