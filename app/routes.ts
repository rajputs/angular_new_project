import { Routes } from '@angular/router'
import { JobslistComponent } from './jobs/jobs-list.component'
import { JobdetailComponent } from './jobs/job-detail.component'
import { JobnotfoundComponent } from "./jobs/jobs-notfound.component";
import { RouteActivatorService } from "./service/route-service";
import { JobsResolver } from "./service/jobs-resolver";
export const appRoutes: Routes = [
    { path: 'jobs', component: JobslistComponent, resolve: { 'jobsfromresolve': JobsResolver } },
    { path: 'jobs/:id', component: JobdetailComponent, canActivate: [RouteActivatorService] },
    //{path:'jobs/:id', component:JobdetailComponent},
    { path: '404', component: JobnotfoundComponent },
    { path: '', redirectTo: 'jobs', pathMatch: 'full' }





]