import { Component, OnInit } from '@angular/core'
import { JobsService } from "../service/jobs-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template: `
<div class="col-md-7">
<div class="panel panel-primary">
<div class="panel-heading">{{job?.jobtitle}}</div>

    <div class="panel-body">
    Job Role:{{job?.jobtitle}}<br/>
    Employment Type:{{job?.jobtype}}<br/>
    Place:{{job?.joblocation}}<br/>
    Date:{{job?.jobpublishedon|date}}<br/>
    Job Description:{{job?.jobdescription}}<br/>
    Job Category:{{job?.jobcategory}}<br/>
    Job URL:{{job?.joblink}}<br/>
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



 }`
    ]
})

export class JobdetailComponent implements OnInit {
    constructor(private jobService: JobsService, private activatedRoute: ActivatedRoute, private route: Router) {

    }
    job: any
    ngOnInit() {
        console.log('inside ngOnInit() of JobdetailComponent')
        this.jobService.getJobById(+this.activatedRoute.snapshot.params['id']).subscribe(job => this.job = job)
        //console.log(this.job)
    }

    showJob(job) {
        if (job) {
            this.job = job
            console.log("inside showJob()" + job)
        }
     

    }

}



