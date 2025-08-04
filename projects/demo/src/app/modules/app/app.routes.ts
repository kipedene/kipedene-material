import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    //{ path: "**", redirectTo: '' },
    { path: "home", component: HomeComponent },
    { path: "components", loadChildren: () => import("../kmat/kmat-module").then(m => m.KmatModule) },
    { path: "guides", component: HomeComponent },
];
