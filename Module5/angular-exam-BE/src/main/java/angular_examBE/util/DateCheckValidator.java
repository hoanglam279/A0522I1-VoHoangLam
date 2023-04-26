package angular_examBE.util;

import angular_examBE.entity.Package;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class DateCheckValidator implements ConstraintValidator<DateCheck, Package> {
    @Override
    public void initialize(DateCheck constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Package value, ConstraintValidatorContext context) {
        String outDate = value.getOutDate();;
        String inDate = value.getInDate();;
        String expDate = value.getExpDate();;
        return (outDate.compareTo(inDate) < 0) && (inDate.compareTo(expDate)) < 0;
    }
}
