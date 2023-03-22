import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';

export function comparePassword(control: AbstractControl): ValidationErrors | null {
  const check = control.value;
  return (check.pass === check.confirmPass) ? null : {passwordNotMatch: true};
}

// TEST CUSTOM VALIDATE
export function checkEmail(control: FormControl): ValidationErrors|null {
  const check = control.value;
  return (check.includes('lam')) ? null : {emailError: true};

}
