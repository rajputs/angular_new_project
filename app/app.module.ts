import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobslistComponent } from './jobs/jobs-list.component';
import { JobthumbnailComponent } from './jobs/job-thumbnail.component';
import { JobsService } from './service/jobs-service';
import { JobdetailComponent } from './jobs/job-detail.component';
import { CollapsablePanel } from './jobs/collapsable-panel-component';
import { JobnotfoundComponent } from "./jobs/jobs-notfound.component";
import { RouteActivatorService } from './service/route-service';
import { ShowService } from './service/searchshow-service';
import { JobsResolver } from './service/jobs-resolver';
import {JobsSearchComponent} from './jobs/jobs-search.component'

import { appRoutes } from './routes';
@NgModule({
  declarations: [
    AppComponent,JobslistComponent,JobthumbnailComponent,JobdetailComponent,
    JobnotfoundComponent,CollapsablePanel,JobsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobsService,RouteActivatorService,JobsResolver,ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
