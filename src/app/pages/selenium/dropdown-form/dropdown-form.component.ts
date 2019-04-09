import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';

@Component({
  selector: 'ngx-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss'],
})
export class DropdownFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      select1: ['', Validators.required],
      select2: ['', Validators.required],
      select3: ['', Validators.required],
      select4: ['', Validators.required],
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
