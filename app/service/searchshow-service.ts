import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { Job } from "../jobs/job-model";

@Injectable()


export class ShowService{
    parentSource = new Subject<Job[]>()
    loadFromSearch:boolean=false


passFilteredJobs(filteredJobs){
    console.log("Inside ShowService()")
    this.loadFromSearch=true
    this.parentSource.next(filteredJobs)

}

}


