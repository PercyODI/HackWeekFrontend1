"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by pears on 11/25/2016.
 */
var core_1 = require('@angular/core');
var FindProjectsComponent = (function () {
    function FindProjectsComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    FindProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    FindProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService
            .getProjects()
            .then(function (projects) { return _this.projects = projects; });
    };
    FindProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'find-projects',
            templateUrl: 'find-projects.component.html',
            styleUrls: ['find-projects.component.css']
        })
    ], FindProjectsComponent);
    return FindProjectsComponent;
}());
exports.FindProjectsComponent = FindProjectsComponent;
