import { funcionarios } from './../func.modelo';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FuncionarioRead2DataSource } from './funcionario-read2-datasource';

@Component({
  selector: 'app-funcionario-read2',
  templateUrl: './funcionario-read2.component.html',
  styleUrls: ['./funcionario-read2.component.css']
})
export class FuncionarioRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<funcionarios>;
  dataSource: FuncionarioRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'CPF','name', 'departamento','salario'];
  ngOnInit() {
    this.dataSource = new FuncionarioRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
