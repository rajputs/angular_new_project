import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Job } from "../jobs/job-model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';




@Injectable()


export class JobsService {
    id: number

    constructor(private http: Http) {

    }

    /** This returns a job . invoked from ngInit() of Jobdetails component */
    getJobById(id: number): Observable<Job> {
        console.log('inside getJobById()')
        // .do has been added to help while debugging.
        return this.getJobsRemote().do(x => console.log(x)).map(jobs => jobs.find(job => job.id === id)).do(x => console.log(x)).catch(this.handleError)

    }
    /** This is invoked to check if that job id exists. Invoked from canActivate method in the RouteAcivator */
    isJobPresent(id: number): Observable<boolean> {
        console.log('inside isJobPresent')
        this.id = id
        console.log("id passed" + id)
        // .do has been added to help while debugging.
        // always return an Observable of boolean from the service.map(val=>(!!val)) converts it to  boolean value. We will call subscribe in the component class
        return this.getJobsRemote().do(x => console.log(x)).map(jobs => jobs.find(job => job.id === id)).do(x => console.log(x)).map(val => (!!val)).do(x => console.log(x)).catch(this.handleError)
    }

    /* This is not called from anywhere...redundant */
    mapJobs(jobs: Job[]) {
        console.log('inside mapJobs')
        return jobs.find(job => job.id === this.id)
    }
/** This returns all the jobs  */
    getJobsRemote(): Observable<Job[]> {
        console.log('fetching data.json')
        //get all the jobs from firebase end point.
        return this.http.get('https://angularproject-88dcd.firebaseio.com/jobsummary.json')
            .map(this.extractData)
            .catch(this.handleError)


    }
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        alert(error)
        return Observable.throw(error.statusText || 'Custom error');
    }

/** returns json from the response object */
    extractData(res: Response) {
        console.log('inside extract data()')
        return res.json()
    }
}


