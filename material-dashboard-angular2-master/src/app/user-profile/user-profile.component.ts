import { QueryByStudent } from 'app/model/query-by-student';
import { QueryByStudentService } from './../service/query-by-student.service';
import { EstudianteService } from './../service/estudiante.service';
import { UserProfileService } from './../service/user-profile.service';
import { Usuario } from 'app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'app/model/estudiante';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario: Usuario;
  estudiante: Estudiante;
  queryByStudent: QueryByStudent;
  formValue !: FormGroup;


  constructor(private userProfileService: UserProfileService, private estudianteService: EstudianteService,
    private queryByStudentService: QueryByStudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*this.userProfileService.traerUsuarioById(1).subscribe(e=> 
      {console.log(e);
      this.usuario = e});

    this.estudianteService.traerEstudianteById(1).subscribe(e=>
      {console.log(e);
      this.estudiante = e});*/

    this.formValue = this.formBuilder.group({
      nombre : [''],
      apellido : [''],
      contrasena : [''],
      tipoDocumentoNombre : [''],
      numeroDocumento : [''],
      correo : [''],
      direccion : [''],
      ciudad : [''],
      telefono : [''],
      tipoSangre : [''],
      rh : [''],
      pasaporte : [''],
      programaAcademico : [''],
      nombreAcudiente : [''],
      telefonoAcudiente : [''],
      parentescoAcudiente : ['']
    })

    this.queryByStudentService.traerDocumentoByEstudiante(1).subscribe(e => {
      this.queryByStudent = e
      this.formValue.get('nombre').setValue(e.nombre);
      this.formValue.get('apellido').setValue(e.apellido);
      this.formValue.get('contrasena').setValue(e.contrasena);
      this.formValue.get('tipoDocumentoNombre').setValue(e.tipoDocumentoNombre);
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

  onEdit(row: any){
    this.formValue.controls['nombre'].setValue(row.nombre);
    this.formValue.controls['apellido'].setValue(row.apellido);
    this.formValue.controls['contrasena'].setValue(row.contrasena);
    this.formValue.controls['tipoDocumentoNombre'].setValue(row.tipoDocumentoNombre);
    this.formValue.controls['numeroDocumento'].setValue(row.numeroDocumento);
    this.formValue.controls['correo'].setValue(row.correo);
    this.formValue.controls['direccion'].setValue(row.direccion);
    this.formValue.controls['ciudad'].setValue(row.ciudad);
    this.formValue.controls['telefono'].setValue(row.telefono);
    this.formValue.controls['tipoSangre'].setValue(row.tipoSangre);
    this.formValue.controls['rh'].setValue(row.rh);
    this.formValue.controls['pasaporte'].setValue(row.pasaporte);
    this.formValue.controls['programaAcademico'].setValue(row.programaAcademico);
    this.formValue.controls['nombreAcudiente'].setValue(row.nombreAcudiente);
    this.formValue.controls['telefonoAcudiente'].setValue(row.telefonoAcudiente);
    this.formValue.controls['parentescoAcudiente'].setValue(row.parentescoAcudiente);
  }

  updateEstudiante(){
    
  }

}
