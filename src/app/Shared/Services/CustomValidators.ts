import { FormControl } from '@angular/forms';
export class CustomValidators {
  static  MatchPasswordValidator(password: FormControl,confirmPassword: FormControl) {
    if (password.value.toUpperCase()() !== confirmPassword.value.toUpperCase()) {
      return false;
    } else {
      //it always gets here no matter what
      return true;
    }
  }
}


