import { Routes } from '@angular/router';

import { LoginSection } from './auth/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]