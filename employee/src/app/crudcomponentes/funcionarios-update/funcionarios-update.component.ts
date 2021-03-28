import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from './../funcionarios.service';
import { funcionarios } from './../func.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-update',
  templateUrl: './funcionarios-update.component.html',
  styleUrls: ['./funcionarios-update.component.css']
})
export class FuncionariosUpdateComponent implements OnInit {

  funcionarios: funcionarios;


  constructor(private funcionariosService: FuncionariosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.funcionariosService.readById(id).subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    })
  }

  UpdateFuncionario(): void {
    this.funcionariosService.update(this.funcionarios).subscribe(() => {
      this.funcionariosService.showMessage('Cadastro de funcionário Atualizado Com Sucesso!')
      this.router.navigate(['/readfuncionarios']);
    })

  }

  cancel(): void {
    this.router.navigate(['/readfuncionarios']);

  }



}
