import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {formatDate} from '@angular/common';

export function identityRevealedValidator(control: AbstractControl): ValidationErrors | null {
  const dateProduct = control.value.dateProduct;
  const startDate = control.value.startDate;
  const endDate = control.value.endDate;

  const date1 = formatDate(dateProduct, 'yyyy-MM-dd', 'en_US');
  const date2 = formatDate(startDate, 'yyyy-MM-dd', 'en_US');
  const date3 = formatDate(endDate, 'yyyy-MM-dd', 'en_US');
  return (((date2 < date3) && (date2 < date1))  && (date1 < date3)) ? null : {dateError: true};
}
