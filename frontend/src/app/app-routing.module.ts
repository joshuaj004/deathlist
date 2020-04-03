import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "list", component: ListComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
