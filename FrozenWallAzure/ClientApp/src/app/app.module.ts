import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProjectListComponent} from './projects/project-list.component';
import {ResumeComponent} from './resume/resume.component';
import {ParallelExampleComponent} from './projects/parallel/parallel-example.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectListComponent,
    ResumeComponent,
    ParallelExampleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'projects', component: ProjectListComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'projects-parallel-example', component: ParallelExampleComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(faBars, faEnvelope, faGithub, faInstagram, faLinkedin);
  }
}
