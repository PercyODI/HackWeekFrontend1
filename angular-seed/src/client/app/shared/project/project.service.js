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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.projectsUrl = "ec2-52-89-175-116.us-west-2.compute.amazonaws.com/hackWeek/HackWeekBackend1/api/projects";
    }
    ProjectService.prototype.handleError = function (error) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.projectsUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.projectsUrl + "/" + id)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProjectService = __decorate([
        core_1.Injectable()
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
