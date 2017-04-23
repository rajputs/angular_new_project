import { Component, OnInit } from '@angular/core'
import { JobsService } from "../service/jobs-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template: `
<div class="col-md-6 col-md-offset-3">
<div class="panel panel-primary">
<div class="panel-heading">{{job?.jobtitle}}</div>

    <div class="panel-body">
    <span class="bold">Job Role</span>:{{job?.jobtitle}}<br/>
     <span class="bold">Emp.Type</span>:{{job?.jobtype}}<br/>
     <span class="bold">Location</span>:{{job?.joblocation}}<br/>
     <span class="bold">Date</span>:{{job?.jobpublishedon|date}}<br/>
     <span class="bold">Job Description</span>:{{job?.jobdescription}}<br/>
    <span class="bold"> Job Category</span>:{{job?.jobcategory}}<br/>
     <span class="bold">Job URL</span>:<a href="{{job?.joblink}}">{{job?.joblink}}</a><br/>
     <br/>
    <button type ="button" class="btn btn-warning" [routerLink]="['/jobs']">Back</button>
 </div>
</div>
</div>
 `,
    styles: [` .container {
     padding-left:10px;
     padding-right:10px;
     border-color:blue;
     border-style:solid;
     font-size:15px;
     height:118px;
     width:500px;



 }
 .bold{
     font-size:15px;
     font-weight:bold;
 }
 `
    ]
})

export class JobdetailComponent implements OnInit {
    constructor(private jobService: JobsService, private activatedRoute: ActivatedRoute, private route: Router) {

    }
    job: any
    
    /** This is called uring the initialisation of this component.
     * calls subscribe to get the values. adn assigns to this.job in the callback.
     * 
     * 
     */
    ngOnInit() {
        console.log('inside ngOnInit() of JobdetailComponent')
        this.jobService.getJobById(+this.activatedRoute.snapshot.params['id']).subscribe(job => this.job = job)
        
    }



}



