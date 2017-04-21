import { Component, OnInit } from '@angular/core'
import { JobsService } from '../service/jobs-service';
import { ActivatedRoute } from "@angular/router";
import { Job } from "./job-model";
@Component({
    selector: 'jobs-list',
    template:
    `
<div><h4>Latest Jobs listings</h4>
<button type="button" style="margin-left:20px"  [class.active]="filterBy==='all'" class="btn btn-basic citylinks" (click)="onClick($event)">All</button>
<button type="button" [class.active]="filterBy==='full time'" class="btn btn-basic citylinks" (click)="onClick($event)">Full Time</button>
<button type="button" [class.active]="filterBy==='contract/temp'" class="btn btn-basic citylinks" (click)="onClick($event)">Contract/Temp</button>
</div>
<div>
<job-thumbnail   *ngFor="let job of visibleJobs" [job]="job"></job-thumbnail>
</div>
`
    , styles: [` h4{padding-left:20px;
}
.citylinks{
    margin-bottom:10px;


}`]
})

export class JobslistComponent implements OnInit {
    jobs: Job[]
    visibleJobs: Job[]
    filterBy: string
    constructor(private jobsService: JobsService, private _route: ActivatedRoute) {
        console.log('constructor for JobslistComponent called')
    }

    ngOnInit() {
        // this.jobsService.getJobs().subscribe(res=>this.jobs=res)
        this.jobs = this._route.snapshot.data['jobsfromresolve']
        this.visibleJobs = this.jobs
        console.log('inside ngOnInit()=>' + this.visibleJobs)
    }

    onClick(value) {
        let filterBy = value.target.innerHTML.toLocaleLowerCase()
        console.log(filterBy)
        if (filterBy === 'all') {
            this.visibleJobs = this.jobs
        }
        else {
            this.visibleJobs = this.jobs.filter(job => { return job.jobtype.toLocaleLowerCase() === filterBy })
        }

    }
}