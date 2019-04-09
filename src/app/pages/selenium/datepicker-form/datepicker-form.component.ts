import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';

@Component({
  selector: 'ngx-datepicker-form',
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.scss'],
})
export class DatepickerFormComponent implements OnInit {
  form: FormGroup;
  min: Date;
  max: Date;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      dateOne: ['', Validators.required],
      dateTwo: ['', Validators.required],
    });

  }

  register() {
    if (this.form.valid) {
      this.toastrService.showSuccessSubmission();
    }
    // console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }
}
