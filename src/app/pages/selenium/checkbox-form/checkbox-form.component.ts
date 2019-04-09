import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';
import { requireCheckboxesToBeCheckedValidator } from '../../../@core/utils/validators/checkbox.validator';

@Component({
  selector: 'ngx-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrls: ['./checkbox-form.component.scss'],
})
export class CheckboxFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }
  items = [
    {key: 'breakfast', text: 'Breakfast'},
    {key: 'lunch', text: 'Lunch'},
    {key: 'dinner', text: 'Dinner'},
  ];
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      comment: [''],
      appartment: ['', Validators.required],
      wantToEatGroup: new FormGroup({
        breakfast: new FormControl(false),
        lunch: new FormControl(false),
        dinner: new FormControl(false),
      }, requireCheckboxesToBeCheckedValidator()),
    });

  }

  register() {
    if (this.form.valid) {
      this.toastrService.showSuccessSubmission();
    }
    console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }
}
