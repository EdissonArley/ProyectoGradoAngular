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
  departamento : Departamento;
  nombreDepartamento : string;

  constructor(private departamentoService:DepartamentoService) { }

  ngOnInit(): void {

    this.departamentoService.traerDepartamento().subscribe(e=> 
      {console.log(e);
      this.departamentos = e});

      this.departamentoService.traerDepartamentoById(1).subscribe(e=> 
        {console.log(e);
        this.departamento = e});

        /*const depto : Departamento = new Departamento();
        depto.nombre = this.nombreDepartamento;
        //console.log("ingresó al metodo" + this.nombreDepartamento);
        depto.nombre = "pruebaDepartamento 222";
    
        this.departamentoService.crearDepartamento(depto).subscribe(e=> 
          {console.log(e);
          this.departamento = e});*/
  }

  crearDepartamento(): void {
    const depto : Departamento = new Departamento();
    depto.nombre = this.nombreDepartamento;
    console.log("ingresó al metodo crear " + this.nombreDepartamento);
    this.departamentoService.crearDepartamento(depto).subscribe(e=> 
      {console.log(e);
        alert(e.toString());
      this.departamento = e});
  }

  /*editarDepartamento(): void {
    const depto : Departamento = new Departamento();
    depto.nombre = this.nombreDepartamento;
    console.log("ingresó al metodo editar" + this.nombreDepartamento);
    this.departamentoService.editarDepartamento(depto).subscribe(e=> 
      {console.log(e);
        alert(e.toString());
      this.departamento = e});
  }*/
}
