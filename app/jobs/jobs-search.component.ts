import { Component,OnInit,Output ,EventEmitter} from "@angular/core";
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import {JobsService} from '../service/jobs-service'
import { Job} from "./job-model";
@Component({
    selector: 'job-search',
    template: `



  
  <form class ="form-inline" align="center">
    <div class="input-group">
      <input type="text" class="form-control" size="50" placeholder="Search Jobs" #search  (keyup) ="searchGo(search.value)"required>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger" (click) ="searchGo(search.value)">Search</button>
      </div>
    </div>
  </form>




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
          .debounceTime(300) 
          .distinctUntilChanged()
          .switchMap(term => this._service.searchJobs(term)).subscribe(x=>
          {
            this.items=x
            this.filteredJobs.emit(this.items)
            console.log(this.items)
            
          })

  }
}