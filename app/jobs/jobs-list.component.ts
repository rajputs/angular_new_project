import { Component, OnInit ,Input} from '@angular/core'
import { JobsService } from '../service/jobs-service';
import {ShowService} from "../service/searchshow-service"
import { ActivatedRoute } from "@angular/router";
import { Job } from "./job-model";
@Component({
    selector: 'jobs-list',
    template:
    `<job-search (filteredJobs)="handleFilteredJobs($event)"></job-search>
<div align="center"><h4>Latest Jobs listings</h4>
<button type="button" style="margin-left:20px"  [class.active]="filterBy==='all'" class="btn btn-basic citylinks" (click)="onClick($event)">All</button>
<button type="button" [class.active]="filterBy==='full time'" class="btn btn-basic citylinks" (click)="onClick($event)">Full Time</button>
<button type="button" [class.active]="filterBy==='contract/temp'" class="btn btn-basic citylinks" (click)="onClick($event)">Contract/Temp</button>
</div>
<div>
<job-thumbnail   *ngFor="let job of visibleJobs " [job]="job"></job-thumbnail>
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
    filteredJobs: any
   // @Input() filteredJobs :Job[]
    constructor(private jobsService: JobsService, private _route: ActivatedRoute,private _showService:ShowService) {
        console.log('constructor for JobslistComponent called')
        if (this._showService.loadFromSearch==true)
             this._showService.parentSource.subscribe(x=>this.visibleJobs=x)
            
    }
    /** The resolver fetches the data from the service and stores in the param 
     * This is done so that the list component and the data arrive at the same point in time for better
     * user expereince
     */
    ngOnInit() {
        
        this.jobs = this._route.snapshot.data['jobsfromresolve']
        this.visibleJobs = this.jobs
        console.log('inside ngOnInit()=>' ,this.visibleJobs)
    }
    
    /** filters the visibleJobs using array filter method  */
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

   showFilteredJobs(){
       this._showService.parentSource.subscribe(x=>this.visibleJobs=x)
   }
  

  handleFilteredJobs(event) {
    this.filteredJobs = event
    this.visibleJobs = event
    //this.visibleJobs=
    console.log("inside handleFilteredJobs root ", event)
   // this._showService.passFilteredJobs(event)

  }
}