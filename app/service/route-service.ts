import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { JobsService } from "./jobs-service"
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Job } from "../jobs/job-model";
import 'rxjs/add/observable/of';



@Injectable()

export class RouteActivatorService implements CanActivate {



    constructor(private jobsService: JobsService, private router: Router) {

    }
    show?: any

    /**This returns true, if the job id is valid else false
     * the job service return the Observable of boolean and map passes this value to showPage() method.
     * Again note, that no subscribe method is invoked.
     * 
     */
    canActivate(route: ActivatedRouteSnapshot) {
        console.log('inside canActivate()')
        return this.jobsService.isJobPresent(+route.params['id']).do(x => console.log(x)).map(val => this.showPage(val)).do(x => console.log(x))//subscribe(val => (this.show=val),err=>this.handler(err))
    }


/** based on the value false, it routes to 404 page, else returns true. if true, the jobdetail componenet is called. */
    showPage(show) {

        if (show === true) {
            return true
        }
        else {
            this.router.navigate(['/404'])
            return false
        }

    }
/** This is not called. */
    handler(err) {
        console.error('Inside error handler')
        console.error(err)

    }
}
