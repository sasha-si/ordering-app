import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnKDQw48fyK5Ob8G7wxMaarwSGHLjkgsc',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  };

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnKDQw48fyK5Ob8G7wxMaarwSGHLjkgsc',
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  };

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    
    let errorMessage = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => errorMessage);
        };
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email address is already existed!';
            break;
          case 'INVALID_LOGIN_CREDENTIALS':
            errorMessage = 'Please check your email and password!';
            break;
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email address has not found!';
            break;
          case 'INVALID_PASSWORD':
            errorMessage = 'This password does not valid!';
            break;
        };
        return throwError(() => errorMessage);
  };
}
