import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { JobsService } from "./jobs-service";
import {Resolve} from '@angular/router'
import {Observable} from 'rxjs/Rx'
import { Job } from "../jobs/job-model";

@Injectable()

export class JobsResolver implements Resolve<any>{
constructor(private _jobsService:JobsService){

}
/** calls the service and stores the list of jobs . Note that it gets the data without calling subscribe method. */
resolve():Observable <Job[]> {
    console.log('inside jobresolvers')
    return this._jobsService.getJobsRemote().map(res=>res)


}

}