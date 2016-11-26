/**
 * Created by pears on 11/25/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Project, ProjectService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(params['id']))
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }
}
