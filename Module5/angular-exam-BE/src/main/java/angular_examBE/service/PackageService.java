package angular_examBE.service;

import angular_examBE.entity.Package;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PackageService extends GeneralService<Package> {
    Page<Package> search(String name, String outDate, String inDate, String expDate, Pageable pageable);
}
