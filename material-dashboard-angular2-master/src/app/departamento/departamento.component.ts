import { DepartamentoService } from './../service/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from 'app/model/departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamentos : Departamento[];
  constructor(private departamentoService:DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.traerDepartamento().subscribe(e=> this.departamentos = e);
  }

}
