import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultingScenariosComponent } from './components/consulting-scenarios/consulting-scenarios.component';
import { ManagementADASComponent } from './components/management-adas/management-adas.component';
import { CreationComponent } from './components/creation/creation.component';
import { AuditComponent } from './components/audit/audit.component';
import { ResultsScenariosComponent } from './components/consulting-scenarios/results-scenarios/results-scenarios.component';
import { ScenariosFilterComponent } from './components/consulting-scenarios/scenarios-filter/scenarios-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ConsultingScenariosComponent,
    ManagementADASComponent,
    CreationComponent,
    AuditComponent,
    ResultsScenariosComponent,
    ScenariosFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
