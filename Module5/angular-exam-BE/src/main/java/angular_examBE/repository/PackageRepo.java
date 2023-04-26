package angular_examBE.repository;

import angular_examBE.entity.Package;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepo extends JpaRepository<Package, Integer> {
    List<Package> findAllByProduct_NameContainingAndOutDateContainingAndInDateContainingAndExpDateContaining(String name, String outDate, String inDate, String expDate);

    @Query("SELECT p FROM Package AS p WHERE p.product.name LIKE %?1% AND p.outDate LIKE %?2% AND p.inDate LIKE %?3% AND p.expDate LIKE %?4%")
    Page<Package> search(String name, String outDate, String inDate, String expDate, Pageable pageable);
}
