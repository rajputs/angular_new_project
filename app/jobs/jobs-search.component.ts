import { Component,OnInit,Output ,EventEmitter} from "@angular/core";
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import {JobsService} from '../service/jobs-service'
import { Job} from "./job-model";
@Component({
    selector: 'job-search',
    template: `

<div class="row">
  <div class="col-md-2 col-md-offset-3"> 
    <input type="text"  id="search" #search>
  </div>
  <div class="col-md-2">
    <button type="button" class= "btn btn-primary" (click) ="searchGo(search.value)">Search jobs</button>
  </div>
</div>




`


})


export class JobsSearchComponent implements OnInit {

    items:Job[]
    searchTermStream = new Subject<string>()
    
    constructor(private _service:JobsService) { }

@Output() filteredJobs= new EventEmitter()

   /* search(term) {
        this.searchTerm.next(term)
    }*/
    
    
    
    searchGo(value) {
        console.log(value)
        this.searchTermStream.next(value)
       
    }

    
  ngOnInit(): void {
      console.log("inside ngOninit() of job search")
      this.searchTermStream
          //.debounceTime(300) 
          .distinctUntilChanged()
          .switchMap(term => this._service.searchJobs(term)).subscribe(x=>
          {
            this.items=x
            this.filteredJobs.emit(this.items)
            console.log(this.items)
            
          })

  }
}