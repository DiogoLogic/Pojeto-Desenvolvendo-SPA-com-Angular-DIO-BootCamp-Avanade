import { FuncionariosService } from './../funcionarios.service';
import { funcionarios } from './../func.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: funcionarios[]
  displayedColumns = ['id', 'CPF','name','departamento','salario','action'];


  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit(): void {
    this.funcionariosService.read().subscribe(funcionarios =>{
      this.funcionarios = funcionarios
    })
  }

}
