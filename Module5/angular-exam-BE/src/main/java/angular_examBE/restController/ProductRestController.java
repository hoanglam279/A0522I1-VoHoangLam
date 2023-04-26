package angular_examBE.restController;

import angular_examBE.entity.Product;
import angular_examBE.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("products")
public class ProductRestController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProduct(@PageableDefault(value = 5, sort = "id", direction = Sort.Direction.ASC)Pageable pageable) {
        if(productService.findAll(pageable) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(productService.findAll(pageable), HttpStatus.OK);
        }
    }


    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Integer id) {
        Optional<Product> product = productService.findById(id);
        if(!product.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<?> createProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }else {
            productService.save(product);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

}
