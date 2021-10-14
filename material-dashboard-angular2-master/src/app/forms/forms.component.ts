import { FormularioInscripcionService } from './../service/formulario-inscripcion.service';
import { FormularioInscripcion } from 'app/model/formulario-inscripcion';
import { FacultadService } from './../service/facultad.service';
import { EstadoService } from './../service/estado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estado } from 'app/model/estado';
import { ProgramaAcademico } from 'app/model/programa-academico';
import { QueryByStudent } from 'app/model/query-by-student';
import { ProgramaAcademicoService } from 'app/service/programa-academico.service';
import { QueryByStudentService } from 'app/service/query-by-student.service';
import { Facultad } from 'app/model/facultad';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  
  queryByStudent: QueryByStudent;
  formValue !: FormGroup;
  programaAcademico: ProgramaAcademico;
  programasAcademico: ProgramaAcademico[];
  estados: Estado[];
  estado: Estado;
  facultades: Facultad[];
  facultad: Facultad;

  
	nombreCompleto : String;
	apellidos : String;
	nacionalidad : String;
	documentoIdentificacion : String;
	fechaNacimiento : Date;
	sexo : String;
	tipoSangre : String;
	rh : String;
	direccionResidencia : String;
	telefono : String;
	estadoCivil : String;
	numeroPasaporte : String;
	celular : String;
	numeroEmergencia : String;
	telefonoAcudiente : String;
	parentesco : String;
	codigo : String;
	semestreAcademico : String;
	jornada : String;
	promedioAcumulado : String;
	idiomas : String;
	institucionExterior : String;
	pais : String;
	cuidad : String;
	fechaSalida : Date;
	fechaRegreso : Date;
	duracionPrograma : String;
	fuenteFinanciacion : String;

  constructor(private formBuilder: FormBuilder, private queryByStudentService: QueryByStudentService, 
    private programaAcademicoService: ProgramaAcademicoService, private estadoService: EstadoService,
    private facultadService: FacultadService, private formularioInscripcionService: FormularioInscripcionService) { }

  ngOnInit(): void {

    this.programaAcademicoService.traerProgramaAcademico().subscribe(e =>{
      console.log(e);
      this.programasAcademico = e
    });

    this.estadoService.traerEstado().subscribe(e =>{
      console.log(e);
      this.estados = e
    });

    this.facultadService.traerFacultad().subscribe(e =>{
      console.log(e);
      this.facultades = e
    });

    this.formValue = this.formBuilder.group({
      nombreCompleto: [''],
      apellidos: [''],
      contrasena: [''],
      tipoDocumentoNombre: [''],
      documentoIdentificacion: [''],
      correo: [''],
      direccionResidencia: [''],
      ciudad: [''],
      telefono: [''],
      tipoSangre: [''],
      rh: [''],
      pasaporte: [''],
      programaAcademico: [''],
      nombreAcudiente: [''],
      telefonoAcudiente: [''],
      parentesco: ['']
    })

    this.queryByStudentService.traerDocumentoByEstudiante(1).subscribe(e => {
      this.queryByStudent = e
      this.formValue.get('nombreCompleto').setValue(e.nombre);
      this.formValue.get('apellidos').setValue(e.apellido);
      this.formValue.get('tipoDocumentoNombre').setValue(e.tipoDocumentoNombre);
      this.formValue.get('documentoIdentificacion').setValue(e.numeroDocumento);
      this.formValue.get('correo').setValue(e.correo);
      this.formValue.get('direccionResidencia').setValue(e.direccion);
      this.formValue.get('ciudad').setValue(e.ciudad);
      this.formValue.get('telefono').setValue(e.telefono);
      this.formValue.get('tipoSangre').setValue(e.tipoSangre);
      this.formValue.get('rh').setValue(e.rh);
      this.formValue.get('pasaporte').setValue(e.pasaporte);
      this.formValue.get('programaAcademico').setValue(e.programaAcademico);
      this.formValue.get('nombreAcudiente').setValue(e.nombreAcudiente);
      this.formValue.get('telefonoAcudiente').setValue(e.telefonoAcudiente);
      this.formValue.get('parentesco').setValue(e.parentescoAcudiente);
      console.log(e);
    });
  }

  crearFormularioInscripcion(): void {
    const formularioInscripcion : FormularioInscripcion = new FormularioInscripcion();
    formularioInscripcion.nombreCompleto = this.formValue.value.nombreCompleto;
	  formularioInscripcion.apellidos = this.formValue.value.apellidos;
	  formularioInscripcion.nacionalidad = this.formValue.value.nacionalidad;
  	formularioInscripcion.documentoIdentificacion = this.formValue.value.documentoIdentificacion;
	  formularioInscripcion.fechaNacimiento = this.formValue.value.fechaNacimiento;
  	formularioInscripcion.sexo = this.formValue.value.sexo;
  	formularioInscripcion.tipoSangre = this.formValue.value.tipoSangre;
  	formularioInscripcion.rh = this.formValue.value.rh;
  	formularioInscripcion.direccionResidencia = this.formValue.value.direccionResidencia;
  	formularioInscripcion.telefono = this.formValue.value.telefono;
	  formularioInscripcion.estadoCivil = this.formValue.value.estadoCivil;
	  formularioInscripcion.numeroPasaporte = this.formValue.value.numeroPasaporte;
	  formularioInscripcion.celular = this.formValue.value.celular;
	  formularioInscripcion.nombreAcudiente = this.formValue.value.nombreAcudiente;
	  formularioInscripcion.telefonoAcudiente = this.formValue.value.telefonoAcudiente;
	  formularioInscripcion.parentesco = this.formValue.value.parentesco;
	  formularioInscripcion.facultad = this.formValue.value.facultad;
	  formularioInscripcion.codigo = this.formValue.value.codigo;
	  formularioInscripcion.programaAcademico = this.formValue.value.programaAcademico;
	  formularioInscripcion.semestreAcademico = this.formValue.value.semestreAcademico;
	  formularioInscripcion.jornada = this.formValue.value.jornada;
	  formularioInscripcion.promedioAcumulado = this.formValue.value.promedioAcumulado;
	  formularioInscripcion.idiomas = this.formValue.value.idiomas;
	  formularioInscripcion.institucionExterior = this.formValue.value.institucionExterior;
	  formularioInscripcion.pais = this.formValue.value.pais;
	  formularioInscripcion.cuidad = this.formValue.value.cuidad;
	  formularioInscripcion.fechaSalida = this.formValue.value.fechaSalida;
	  formularioInscripcion.fechaRegreso = this.formValue.value.fechaRegreso;
	  formularioInscripcion.duracionPrograma = this.formValue.value.duracionPrograma;
  	formularioInscripcion.fuenteFinanciacion = this.formValue.value.fuenteFinanciacion;
  	formularioInscripcion.estado = this.formValue.value.estado;
    console.log("ingresó al metodo crear " + formularioInscripcion);
    this.formularioInscripcionService.crearFormularioInscripcion(formularioInscripcion).
    subscribe(e=> 
      {alert("Datos estudiante ingresados exitosamente.");
        console.log('esta es la respuesta que ud esta retornnado desde java');
        console.log(e);
      });
  }

}
