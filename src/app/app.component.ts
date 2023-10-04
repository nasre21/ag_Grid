import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
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


constructor(private http: HttpClient){}
  ngOnInit() {
   this.rowData$= this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

}
