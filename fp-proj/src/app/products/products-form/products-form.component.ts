import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'fp-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  myReactiveForm = new FormGroup({
    name: new FormControl('namasdsadae', [Validators.required, this.myValidator]),
    email: new FormControl(null, Validators.email)
  });
  constructor() { }

  ngOnInit() {
    this.myReactiveForm.valueChanges.pipe(debounceTime(400)).subscribe(console.log)
  }

  handleSubmit(form) {
    console.log(form)
  }

  myValidator(control: AbstractControl) {
    return control.value.includes('dupa') ? { dupaError: true} : null;
  }

}
