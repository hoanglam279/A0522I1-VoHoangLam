package angular_examBE.service;

import angular_examBE.entity.Package;
import angular_examBE.repository.PackageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackageServiceImpl implements PackageService{
    @Autowired
    private PackageRepo packageRepo;


    @Override
    public Page<Package> findAll(Pageable pageable) {
        return packageRepo.findAll(pageable);
    }

    @Override
    public Optional<Package> findById(int id) {
        return packageRepo.findById(id);
    }

    @Override
    public void save(Package pck) {
        packageRepo.save(pck);
    }


    @Override
    public void deleteById(int id) {
        packageRepo.deleteById(id);
    }

    @Override
    public Page<Package> search(String name, String outDate, String inDate, String expDate, Pageable pageable) {
//        return packageRepo.findAllByProduct_NameContainingAndOutDateContainingAndInDateContainingAndExpDateContaining(name, outDate,inDate,expDate)
        return packageRepo.search(name, outDate,inDate,expDate, pageable);
    }
}
