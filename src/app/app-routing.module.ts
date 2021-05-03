import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './components/audit/audit.component';
import { ConsultingScenariosComponent } from './components/consulting-scenarios/consulting-scenarios.component';
import { CreationComponent } from './components/creation/creation.component';
import { HomeComponent } from './components/home/home.component';
import { ManagementADASComponent } from './components/management-adas/management-adas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'consultation',
    component: ConsultingScenariosComponent,
  },
  {
    path: 'create',
    component: CreationComponent,
  },
  {
    path: 'management',
    component: ManagementADASComponent,
  },
  {
    path: 'audit',
    component: AuditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
