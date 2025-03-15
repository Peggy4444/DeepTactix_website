import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportingDirectorsComponent } from './sporting-directors/sporting-directors.component';
import { ScoutsComponent } from './scouts/scouts.component';
import { AnalystsComponent } from './analysts/analysts.component';
import { ResearchersComponent } from './researchers/researchers.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'sporting-directors', component: SportingDirectorsComponent },
      { path: 'scouts', component: ScoutsComponent },
      { path: 'analysts', component: AnalystsComponent },
      { path: 'researchers', component: ResearchersComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '**', redirectTo: '' } // Redirect to home for unknown routes
    ])
  ]
};