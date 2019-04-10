import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '../../../@core/utils/toastr.service';

@Component({
  selector: 'ngx-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss'],
})
export class FileFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      file: ['', Validators.required],
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
