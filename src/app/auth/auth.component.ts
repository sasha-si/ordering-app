import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignedUpMode = true;
  isLoading = false;
  error: string | null = null;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { };

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

    let authObs: Observable<AuthResponseData>;
    
    this.isLoading = true;

    if (this.isSignedUpMode) {
      authObs = this.auth.login(email, password)
    } else {
      authObs = this.auth.signup(email, password)
    }

    authObs.subscribe(
      {
        next: (resData) => {
          console.log(resData);
          
          this.isLoading = false;
          this.router.navigate(['/recipes'])
        },
        error: (errorRes) => {
          console.log(errorRes);
          
          this.error = errorRes;
          this.isLoading = false;
        }
      }
    )

    this.form.reset();
  };
}
