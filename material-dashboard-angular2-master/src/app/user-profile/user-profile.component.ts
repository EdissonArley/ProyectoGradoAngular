import { QueryByStudent } from 'app/model/query-by-student';
import { QueryByStudentService } from './../service/query-by-student.service';
import { EstudianteService } from './../service/estudiante.service';
import { UserProfileService } from './../service/user-profile.service';
import { Usuario } from 'app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'app/model/estudiante';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario : Usuario;
  estudiante : Estudiante;
  queryByStudent: QueryByStudent;

  
  constructor(private userProfileService:UserProfileService, private estudianteService:EstudianteService, private queryByStudentService: QueryByStudentService ) { }

  ngOnInit(): void {
    this.userProfileService.traerUsuarioById(1).subscribe(e=> 
      {console.log(e);
      this.usuario = e});

    this.estudianteService.traerEstudianteById(1).subscribe(e=>
      {console.log(e);
      this.estudiante = e});

    this.queryByStudentService.traerDocumentoByEstudiante(1).subscribe(e=>
      {
        this.queryByStudent = e
        console.log("Resultadoooooo");
        console.log(e)
        console.log("Resultadoooooo Finnn");
     
    });
  }


}
