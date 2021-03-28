import { funcionarios } from './../func.modelo';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


const EXAMPLE_DATA: funcionarios[] = [
  {id: 1, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 2, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 3, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 4, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 5, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 6, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 7, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 8, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 9, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 10, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 11, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 12, CPF:0, name: 'Hydrogen',departamento:'',salario:0},
  {id: 13, CPF:0, name: 'Hydrogen',departamento:'',salario:0},

];

/**
 * Data source for the FuncionarioRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class FuncionarioRead2DataSource extends DataSource<funcionarios> {
  data: funcionarios[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<funcionarios[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: funcionarios[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: funcionarios[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
