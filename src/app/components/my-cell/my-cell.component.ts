import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `
    <p class="">
   <button class="btn btn-danger  text-light  " (click)="onClick($event)">Click  </button> <span  class="fw-bold ps-3">{{value}}</span>
    </p>



  `,
  styles: [
  ]
})
export class MyCellComponent  implements OnInit, ICellRendererAngularComp {


  value: any;




  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false
  }

  ngOnInit(): void {

  }

onClick(event: any): void {

  alert(`Cell value es ${this.value}`)
}
}
