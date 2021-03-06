import { Component } from "@angular/core";
/** ngcontent used to toggle the contents in the thumbnail */
@Component({
    selector:'collapsable-panel'
    ,
    template:`
  
    <div (click)="toggleView()"  >
    <button type="button" *ngIf="!visible" class="btn btn-link">Expand...</button>

   
    <ng-content *ngIf="visible"></ng-content>
   
    </div>
   
    
    `
})


export class CollapsablePanel{
visible :boolean = true

toggleView(){
    this.visible=!this.visible
    console.log('toggle invoked!!!')
}
}