import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Job } from "../jobs/job-model";
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/flatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';




@Injectable()


export class JobsService {
    id: number
    //id: string
    term:string
     //url:string='https://angularproject-88dcd.firebaseio.com/jobsummary.json'
      url:string='https://jobsgalore-2ba98.firebaseio.com/jobsummary.json'
    constructor(private http: Http) {
   
    }

    /** This returns a job . invoked from ngInit() of Jobdetails component */
    getJobById(id: number): Observable<Job> {
        console.log('inside getJobById()')
        // .do has been added to help while debugging.
        return this.getJobsRemote().do(x => console.log(x)).map(jobs => jobs.find(job => job.id === id)).do(x => console.log(x)).catch(this.handleError)
        //return this.http.get("https://angularproject-88dcd.firebaseio.com/jobs/"+id+".json").map(res=>res.json())
    }
    /** This is invoked to check if that job id exists. Invoked from canActivate method in the RouteAcivator */
    isJobPresent(id: number): Observable<boolean> {
        console.log('inside isJobPresent')
        this.id = id
        console.log("id passed" + id)
        // .do has been added to help while debugging.
        // always return an Observable of boolean from the service.map(val=>(!!val)) converts it to  boolean value. We will call subscribe in the component class
        return this.getJobsRemote().do(x => console.log(x)).map(jobs => jobs.find(job => job.id === id)).do(x => console.log(x)).map(val => (!!val)).do(x => console.log(x)).catch(this.handleError)
    }x

    /* This is not called from anywhere...redundant */
    mapJobs(jobs: Job[]) {
        console.log('inside mapJobs')
        return jobs.find(job => job.id === this.id)
    }
    /** This returns all the jobs  */
    getJobsRemote(): Observable<Job[]> {
        console.log('fetching data.json')
        //get all the jobs from firebase end point.
        return this.http.get(this.url).do(x => console.log(x))
            .map(res=>res.json())//.do(x => console.log(x))
            .catch(this.handleError)


    }
    /** search jobs matching a specific criteria */

     searchJobs(term: string): Observable <Job[]> {
        console.log('inside searchJobs()')
        // .do has been added to help while debugging.
        this.term=term
        return this.http.get(this.url)
        .map(res => res.json())
        .map(jobs => jobs.filter(job => (job.jobtitle.toLowerCase().indexOf(this.term.toLowerCase())>-1)))


        //.filter( job=> {
       //.map(res => {res.json()}).filter( jobs=> {
            //console.log(jobs)
           // console.log(this.term)
           // console.log(jobs.jobtitle.toLowerCase().indexOf(this.term.toLowerCase())>-1)
          //  return (job.jobtitle.toLowerCase().indexOf(this.term.toLowerCase())>-1)})
            //.subscribe(x=>console.log(x))

       // .do(x=>console.log(x)).catch(this.handleError)

    }
    
    filterJobs(jobs,idx,num){
        console.log(jobs)
        console.log("inside filterJobs",this.term)
       
   
      //return job
        
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


