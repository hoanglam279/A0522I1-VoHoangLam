package angular_examBE.restController;

import angular_examBE.entity.Package;
import angular_examBE.service.PackageService;
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
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("packages")
public class PackageRestController {
    @Autowired
    PackageService packageService;

    @GetMapping
    public ResponseEntity<Page<Package>> getAllPackage(@PageableDefault(value = 5, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<Package> packages = packageService.findAll(pageable);
        if (!packages.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(packageService.findAll(pageable), HttpStatus.OK);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Package> getPackageById(@PathVariable("id") Integer id) {
        Optional<Package> pck = packageService.findById(id);
        if (!pck.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(pck.get(), HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPackage(@Valid @RequestBody Package pck, BindingResult bindingResult) {
        if(!bindingResult.hasErrors()) {
            packageService.save(pck);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
    }

    @PatchMapping("{id}")
    public ResponseEntity<?> updatePackage(@Valid @RequestBody Package pck, BindingResult bindingResult, @PathVariable("id") Integer id) {
        Optional<Package> foundPackage = packageService.findById(id);
        if(!foundPackage.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            if(!bindingResult.hasErrors()) {
                packageService.save(pck);
                return new ResponseEntity<>(HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
            }
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePackage(@PathVariable("id") Integer id) {
        Optional<Package> pck = packageService.findById(id);
        if (!pck.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            packageService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("search")
    public ResponseEntity<Page<Package>> search(
            @PageableDefault(value = 5, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
            @RequestParam("name") String name,
            @RequestParam("outDate") String outDate,
            @RequestParam("inDate") String inDate,
            @RequestParam("expDate") String expDate) {
        Page<Package> packageList = packageService.search(name, outDate, inDate, expDate, pageable);
        return new ResponseEntity<>(packageList, HttpStatus.OK);
    }
}
