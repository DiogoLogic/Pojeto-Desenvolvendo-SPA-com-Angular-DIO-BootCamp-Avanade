import { Router, ActivatedRoute } from '@angular/router';
import { FuncionariosService } from './../funcionarios.service';
import { funcionarios } from './../func.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-delete',
  templateUrl: './funcionarios-delete.component.html',
  styleUrls: ['./funcionarios-delete.component.css']
})
export class FuncionariosDeleteComponent implements OnInit {

  funcionarios: funcionarios;

  constructor(private funcionariosService: FuncionariosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.funcionariosService.readById(id).subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    })
  }
  deleteFuncionario(): void {
    this.funcionariosService.delete(this.funcionarios.id).subscribe(() => {
      this.funcionariosService.showMessage("Funcionário excluído com sucesso!")
      this.router.navigate(['/readfuncionarios']);
    })
  }
  cancel(): void {
    this.router.navigate(['/readfuncionarios']);
  }

}
