import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindProjectsComponent } from './find-projects.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectService } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule],
  declarations: [
    FindProjectsComponent,
    ProjectDetailComponent
  ],
  exports: [
    FindProjectsComponent,
    ProjectDetailComponent
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
