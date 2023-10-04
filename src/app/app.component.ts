import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
 public rowData$!: Observable<any[]>;
colDefs:ColDef[] = [

  {field: 'make'},
  {field: 'model'},
  {field: 'price'}

];
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};

@ViewChild(AgGridAngular) AgGrid!: AgGridAngular;

constructor(private http: HttpClient){}
  ngOnInit() {
   this.rowData$= this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

  onCellClicked(event:CellClickedEvent){
    console.log('onCellClicked', event);
  }


  clearSelected(){
    this.AgGrid.api.deselectAll();
  }
}
