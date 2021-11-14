import { ProgramaAcademicoService } from './../service/programa-academico.service';
import { CiudadService } from './../service/ciudad.service';
import { ProgramaAcademico } from './../model/programa-academico';
import { TipoDocumentoService } from './../service/tipo-documento.service';
import { QueryByStudent } from 'app/model/query-by-student';
import { QueryByStudentService } from './../service/query-by-student.service';
import { Usuario } from 'app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'app/model/estudiante';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoDocumento } from 'app/model/tipo-documento';
import { Ciudad } from 'app/model/ciudad';


@Component({
  selector: 'app-secretaria-profile',
  templateUrl: './secretaria-profile.component.html',
  styleUrls: ['./secretaria-profile.component.css']
})

export class SecretariaProfileComponent implements OnInit {

  usuario: Usuario;
  estudiante: Estudiante;
  queryByStudent: QueryByStudent;
  formValue !: FormGroup;
  tipoDocumento: TipoDocumento;
  tiposDocumento: TipoDocumento[] = [];
  ciudad: Ciudad;
  ciudades: Ciudad[];
  programaAcademico: ProgramaAcademico;
  programasAcademico: ProgramaAcademico[];

  constructor(private tipoDocumentoService: TipoDocumentoService, private ciudadService: CiudadService, private programaAcademicoService: ProgramaAcademicoService,
    private queryByStudentService: QueryByStudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.tipoDocumentoService.traerTipoDocumento().subscribe(e => {
      console.log(e);
      this.tiposDocumento = e
    });

    this.ciudadService.traerCiudad().subscribe(e => {
      console.log(e);
      this.ciudades = e
    });

    this.programaAcademicoService.traerProgramaAcademico().subscribe(e =>{
      console.log(e);
      this.programasAcademico = e
    });

    this.formValue = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      contrasena: [''],
      tipoDocumento: [''],
      numeroDocumento: [''],
      correo: [''],
      direccion: [''],
      ciudad: [''],
      telefono: [''],
      tipoSangre: [''],
      rh: [''],
      pasaporte: [''],
      programaAcademico: [''],
      nombreAcudiente: [''],
      telefonoAcudiente: [''],
      parentescoAcudiente: ['']
    })

    this.queryByStudentService.traerDocumentoByEstudiante(3).subscribe(e => {
      this.queryByStudent = e
      this.formValue.get('nombre').setValue(e.nombre);
      this.formValue.get('apellido').setValue(e.apellido);
      this.formValue.get('contrasena').setValue(e.contrasena);
      this.formValue.get('tipoDocumento').setValue(e.tipoDocumentoNombre);
      this.formValue.get('numeroDocumento').setValue(e.numeroDocumento);
      this.formValue.get('correo').setValue(e.correo);
      this.formValue.get('direccion').setValue(e.direccion);
      this.formValue.get('ciudad').setValue(e.ciudad);
      this.formValue.get('telefono').setValue(e.telefono);
      this.formValue.get('tipoSangre').setValue(e.tipoSangre);
      this.formValue.get('rh').setValue(e.rh);
      this.formValue.get('pasaporte').setValue(e.pasaporte);
      this.formValue.get('programaAcademico').setValue(e.programaAcademico);
      this.formValue.get('nombreAcudiente').setValue(e.nombreAcudiente);
      this.formValue.get('telefonoAcudiente').setValue(e.telefonoAcudiente);
      this.formValue.get('parentescoAcudiente').setValue(e.parentescoAcudiente);
      console.log(e);
    });
  }

  updateSecretaria() {
    console.log('Este es el nombre'+ this.formValue.value.nombre);
    this.queryByStudent.nombre = this.formValue.value.nombre;
    this.queryByStudent.apellido = this.formValue.value.apellido;
    this.queryByStudent.contrasena = this.formValue.value.contrasena;
    this.queryByStudent.tipoDocumentoNombre = this.tipoDocumento.descripcion;
    this.queryByStudent.numeroDocumento = this.formValue.value.numeroDocumento;
    this.queryByStudent.correo = this.formValue.value.correo;
    this.queryByStudent.direccion = this.formValue.value.direccion;
    this.queryByStudent.ciudad = this.formValue.value.ciudad;
    this.queryByStudent.telefono = this.formValue.value.telefono;
    this.queryByStudent.tipoSangre = this.formValue.value.tipoSangre;
    this.queryByStudent.rh = this.formValue.value.rh;
    this.queryByStudent.pasaporte = this.formValue.value.pasaporte;
    /*this.queryByStudent.programaAcademico = this.programaAcademico.nombrePrograma;
    this.queryByStudent.nombreAcudiente = this.formValue.value.nombreAcudiente;
    this.queryByStudent.telefonoAcudiente = this.formValue.value.telefonoAcudiente;
    this.queryByStudent.parentescoAcudiente = this.formValue.value.parentescoAcudiente;*/
    this.queryByStudentService.patchEstudiante(this.queryByStudent, this.queryByStudent.id)
      .subscribe(res => {
        alert("Datos secretaria actualizados exitosamente.");
        let ref = document.getElementById('cancelar')
        ref?.click();
      })
  }

}

