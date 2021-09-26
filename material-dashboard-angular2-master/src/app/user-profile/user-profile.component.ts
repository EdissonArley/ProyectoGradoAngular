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
      this.formValue.get('numeroDocumento').setValue(e.numeroDocumento);
  
      console.log(e);
    });
  }


}
