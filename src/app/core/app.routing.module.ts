import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {TestsudComponent} from '../testsud/testsud.component';
import {StatsComponent} from '../stats/stats.component';
import {HomepageComponent} from '../homepage/homepage.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'testsud', component: TestsudComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
