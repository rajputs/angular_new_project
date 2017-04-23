import {Component,Input} from '@angular/core'

@Component({

selector:'job-thumbnail',
template:`
<div class="col-md-6 col-md-offset-3">
<div class="panel panel-primary" >
<div class="panel-heading"><h3 class="panel-title">{{job.jobtitle|uppercase}}</h3></div>
<div class="panel-body">
<collapsable-panel>
    <p>Job Role:{{job.jobtitle}}<br/>
    Emp.Type:{{job.jobtype}}<br/>
    Location:{{job.joblocation}}<br/>
    Date:{{job.jobpublishedon|date:'shortDate'}}</p>
   
</collapsable-panel>   
 <div button type="button'" [routerLink]="['/jobs',job.id]" class="btn btn-warning">Detail</div>
   
   </div>
   </div>
   </div>

`,

styles: [
    `.box {
    padding:10px;
    border-width:1px;
    border-style:solid;
    margin:5px;
    border-color:black ;
}
    .header{
    font-size:20px;
    font-weight:bold;
}
    .description
    {
    font-family:helvetica;
    font-weight:normal;
    font-size:12px;
}`

]
})

export class JobthumbnailComponent{

@Input() job:any


}
