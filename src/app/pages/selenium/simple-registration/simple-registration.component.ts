import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';

@Component({
  selector: 'ngx-simple-registration',
  templateUrl: './simple-registration.component.html',
  styleUrls: ['./simple-registration.component.scss'],
})
export class SimpleRegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/g)]],
      password: ['' , [Validators.required, Validators.minLength(5)]],
    });
  }

  register() {
    this.toastrService.showSuccessSubmission();
  }

  get f() {
    return this.form.controls;
  }
}
