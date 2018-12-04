import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { TestsudComponent } from './testsud/testsud.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatSidenavModule,MatListModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { DataService } from './data.service';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatsComponent,
    TestsudComponent,
    MyNavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    ChartsModule,
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
