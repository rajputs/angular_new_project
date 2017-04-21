import { Component } from "@angular/core";

@Component({
template:`
<div class="errorM">
This job does not exist.Please return to listing page<br/>
<button type="button" [routerLink]="['/jobs']" class="btn btn-danger">Back</button>
</div>

`
,
styles:[`.errorM {
    text-color:red;
    font-size:20px;
        }`]

})

export class JobnotfoundComponent{

}