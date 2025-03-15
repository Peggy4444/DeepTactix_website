import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AdvancedResearchComponent } from './advanced-research/advanced-research.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { TechnologyComponent } from './technology/technology.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'advanced-research', component: AdvancedResearchComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'request-demo', component: RequestDemoComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown paths to the homepage
];