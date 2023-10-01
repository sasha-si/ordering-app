import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignedUpMode = true;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {};

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
  })
  }

  onSwitchMode() {
    this.isSignedUpMode = !this.isSignedUpMode;
  };

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  };
}
