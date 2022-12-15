import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if (!control || !matchingControl) {
        console.error('Fprm controls can not be found in the form group.');

        return {
          controlNotFound: false,
        };
      }

      const error =
        control.value === matchingControl.value ? null : { noMatch: true };

      matchingControl.setErrors(error);

      return error;
    };
  }
}

// new RegisterValidadtior.match() <~ Without static
// RegisterValidadtior.match() <~ With static

// static methods create automatically a new instance of the method just by calling 'em
