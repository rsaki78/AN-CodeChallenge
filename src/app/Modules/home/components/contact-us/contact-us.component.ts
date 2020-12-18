import { BaseComponent } from './../../../../shared/core/Base Components/base.component';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formGroup: FormGroup;
  dynamicFormGroup: FormGroup;
  get form() { return this.formGroup.controls; }

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });

    this.dynamicFormGroup = this.fb.group({
      addresses: this.fb.array([])
    });
  }

  initAddress() {
    return this.fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addFormElement() {
    const control = this.dynamicFormGroup.controls.addresses as FormArray;
    control.push(this.initAddress());
  }

  removeFormElement(i: number) {
    const control = this.dynamicFormGroup.controls.addresses as FormArray;
    control.removeAt(i);
  }

  submitStaticForm() {
    if (this.formGroup.valid) {

    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  submitDynamicForm() {
    if (this.dynamicFormGroup.valid) {

    } else {
      this.dynamicFormGroup.markAllAsTouched();
    }
  }

}
