import { funcionarios } from './../func.modelo';

import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';



@Component({
  selector: 'app-cadfuncionarios',
  templateUrl: './cadfuncionarios.component.html',
  styleUrls: ['./cadfuncionarios.component.css']
})
export class CadfuncionariosComponent implements OnInit {

  funcionarios: funcionarios = {
    id:null,
    CPF:null,
    name: '',
    departamento: '',
    salario:null,


  }


  constructor(private FuncionariosService: FuncionariosService,
    private router: Router) { }

  ngOnInit(): void {

  }
  cadFuncionariomsg(): void {
    this.FuncionariosService.criarfuncionariohttp(this.funcionarios).subscribe(() => {
    this.FuncionariosService.showMessage('Funcionário Cadastrado com Sucesso!')
    this.router.navigate(['/'])
    })

  }
  cancel(): void {
    this.router.navigate(['/'])
  }


}
