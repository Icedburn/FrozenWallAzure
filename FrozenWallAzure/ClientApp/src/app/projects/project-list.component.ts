import { Component, OnInit } from '@angular/core';
import { IProject } from './IProject';
import {ProjectService} from './project.service';

@Component({
  selector: 'fw-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  pageTitle = 'Project List';
  showLastUpdated = false;
  errorMessage: string;
  filteredProjects: IProject[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProjects = this.listFilter && this.listFilter !== '' ? this.performFilter(this.listFilter) : this.projects;
  }
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) {
  }

  toogleId(): void {
    this.showLastUpdated = !this.showLastUpdated;
  }

  private performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLowerCase();
    return this.projects.filter(
      (project: IProject) => {
        return (project.Name.toLocaleLowerCase().indexOf(filterBy) !== -1 || project.Language.toLowerCase().indexOf(filterBy) !== -1);
      }
    );
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects;
        this.filteredProjects = this.projects;
        this._listFilter = '';
      },
      error: err => this.errorMessage = err
    });
    this.filteredProjects = this.projects;
    this._listFilter = '';
  }
}
