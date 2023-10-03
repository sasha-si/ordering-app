import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignedUpMode = true;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { };

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
    if (!this.form.valid) {
      return;
    }
    const { email, password } = this.form.value

    if (this.isSignedUpMode) {
      //...
    } else {
      this.auth.signup(email, password).subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          }
        }
      )
    }
    this.form.reset();
  };
}
