import {AbstractControl, ValidationErrors} from '@angular/forms';

export function checkDate(control: AbstractControl): ValidationErrors | null {
  const check = control.value;
  const outDate = new Date(check.outDate);
  const inDate = new Date(check.inDate);
  const expDate = new Date(check.expDate);

  return ((inDate < expDate) && (outDate < inDate)) ? null : {invalidDate: true};
}
