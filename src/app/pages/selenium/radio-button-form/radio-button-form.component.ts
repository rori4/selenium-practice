import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';

@Component({
  selector: 'ngx-radio-button-form',
  templateUrl: './radio-button-form.component.html',
  styleUrls: ['./radio-button-form.component.scss'],
})
export class RadioButtonFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(20)]],
      description: ['' , [Validators.required, Validators.minLength(20)]],
      radioBtns: ['', [Validators.required]],
    });
  }

  register() {
    if (this.form.valid) {
      this.toastrService.showSuccessSubmission();
    }
  }

  get f() {
    return this.form.controls;
  }
}
