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

  formularioInscripcion : FormularioInscripcion
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
      nombre: [''],
      apellido: [''],
      contrasena: [''],
      tipoDocumentoNombre: [''],
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

  crearFormularioInscripcion(): void {
    const formInscripcion : FormularioInscripcion = new FormularioInscripcion();
    formInscripcion.nombreCompleto = this.nombreCompleto;
	  formInscripcion.apellidos = this.apellidos;
	  formInscripcion.nacionalidad = this.nacionalidad;
  	formInscripcion.documentoIdentificacion = this.documentoIdentificacion;
	  formInscripcion.fechaNacimiento = this.fechaNacimiento;
  	formInscripcion.sexo = this.sexo;
  	formInscripcion.tipoSangre = this.tipoSangre;
  	formInscripcion.rh = this.rh;
  	formInscripcion.direccionResidencia = this.direccionResidencia;
  	formInscripcion.telefono = this.telefono;
	  formInscripcion.estadoCivil = this.estadoCivil;
	  formInscripcion.numeroPasaporte = this.numeroPasaporte;
	  formInscripcion.celular = this.celular;
	  formInscripcion.numeroEmergencia = this.numeroEmergencia;
	  formInscripcion.telefonoAcudiente = this.telefonoAcudiente;
	  formInscripcion.parentesco = this.parentesco;
	  formInscripcion.facultad = this.facultad;
	  formInscripcion.codigo = this.codigo;
	  formInscripcion.programaAcademico = this.programaAcademico;
	  formInscripcion.semestreAcademico = this.semestreAcademico;
	  formInscripcion.jornada = this.jornada;
	  formInscripcion.promedioAcumulado = this.promedioAcumulado;
	  formInscripcion.idiomas = this.idiomas;
	  formInscripcion.institucionExterior = this.institucionExterior;
	  formInscripcion.pais = this.pais;
	  formInscripcion.cuidad = this.cuidad;
	  formInscripcion.fechaSalida = this.fechaSalida;
	  formInscripcion.fechaRegreso = this.fechaRegreso;
	  formInscripcion.duracionPrograma = this.duracionPrograma;
  	formInscripcion.fuenteFinanciacion = this.fuenteFinanciacion;
  	formInscripcion.estado = this.estado;
    console.log("ingresó al metodo crear " + this.nombreCompleto);
    this.formularioInscripcionService.crearFormularioInscripcion(formInscripcion).subscribe(e=> 
      {console.log(e);
        alert(e.toString());
      this.formularioInscripcion = e});
  }

}
