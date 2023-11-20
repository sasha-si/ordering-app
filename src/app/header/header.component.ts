import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { };

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.saveRecipes();
  };

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  };

  logout() {
    this.authService.logout();
  };

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
