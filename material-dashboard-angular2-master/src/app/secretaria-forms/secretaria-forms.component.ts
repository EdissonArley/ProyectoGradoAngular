import { Amplify } from 'aws-amplify';
import { DocumentoService } from './../service/documento.service';
import { CiudadService } from './../service/ciudad.service';
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
import { Ciudad } from 'app/model/ciudad';
import { Documento } from 'app/model/documento';
import { UploadFileService } from 'app/service/upload-file.service';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretaria-forms',
  templateUrl: './secretaria-forms.component.html',
  styleUrls: ['./secretaria-forms.component.css']
})

export class SecretariaFormsComponent implements OnInit {

  queryByStudent: QueryByStudent;
  formValuePersonalInformation !: FormGroup;
  formValueAcademicInformation !: FormGroup;
  formValueInternationalInformation !: FormGroup;
  formValueFiles !: FormGroup;
  programaAcademico: ProgramaAcademico;
  programasAcademico: ProgramaAcademico[];
  formularioInscripcion: FormularioInscripcion;
  formulariosInscripcion: FormularioInscripcion[];
  estados: Estado[];
  estado: Estado;
  facultades: Facultad[];
  facultad: Facultad;
  ciudades: Ciudad[];
  ciudad: Ciudad;


  nombreCompleto: String;
  apellidos: String;
  nacionalidad: String;
  documentoIdentificacion: String;
  fechaNacimiento: Date;
  sexo: String;
  tipoSangre: String;
  rh: String;
  direccionResidencia: String;
  telefono: String;
  estadoCivil: String;
  numeroPasaporte: String;
  celular: String;
  numeroEmergencia: String;
  telefonoAcudiente: String;
  parentesco: String;
  codigo: String;
  semestreAcademico: String;
  jornada: String;
  promedioAcumulado: String;
  idiomas: String;
  institucionExterior: String;
  pais: String;
  fechaSalida: Date;
  fechaRegreso: Date;
  duracionPrograma: String;
  fuenteFinanciacion: String;

  cartaMotivacion: Blob;
  hojaDeVida: Blob;
  cartaAutorizacion: Blob;
  cartaCertificado: Blob;
  cartaInforme: Blob;
  cartaHomologacion: Blob;
  cartaAutorizacionDirector: Blob;
  cartaAceptacionEmpresa: Blob;
  cartaAceptacionIdiomas: Blob;
  cartaAceptacionPonencia: Blob;
  cartaAutorizacionDecano: Blob;
  cartaInvitacion: Blob;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private formBuilder: FormBuilder, private queryByStudentService: QueryByStudentService,
    private programaAcademicoService: ProgramaAcademicoService, private estadoService: EstadoService,
    private facultadService: FacultadService, private ciudadService: CiudadService,
    private formularioInscripcionService: FormularioInscripcionService, private documentoService: DocumentoService,
    private uploadService: UploadFileService) { }

  ngOnInit(): void {

    this.fileInfos = this.uploadService.getFiles();

    this.formularioInscripcionService.traerFormularioById(1).subscribe(e => {
      console.log(e);
      this.formularioInscripcion = e
    });

    this.programaAcademicoService.traerProgramaAcademico().subscribe(e => {
      console.log(e);
      this.programasAcademico = e
    });

    this.estadoService.traerEstado().subscribe(e => {
      console.log(e);
      this.estados = e
    });

    this.facultadService.traerFacultad().subscribe(e => {
      console.log(e);
      this.facultades = e
    });

    this.ciudadService.traerCiudad().subscribe(e => {
      console.log(e);
      this.ciudades = e
    });

    this.formValuePersonalInformation = this.formBuilder.group({
      nombreCompleto: [''],
      apellidos: [''],
      nacionalidad: [''],
      documentoIdentificacion: [''],
      fechaNacimiento: [''],
      sexo: [''],
      tipoSangre: [''],
      rh: [''],
      direccionResidencia: [''],
      telefono: [''],
      estadoCivil: [''],
      numeroPasaporte: [''],
      celular: [''],
      nombreAcudiente: [''],
      telefonoAcudiente: [''],
      parentesco: [''],
    })

    this.formValueAcademicInformation = this.formBuilder.group({
      facultad: [''],
      codigo: [''],
      programaAcademico: [''],
      semestreAcademico: [''],
      jornada: [''],
      promedioAcumulado: [''],
      estado: [''],
      idiomas: [''],
    })

    this.formValueInternationalInformation = this.formBuilder.group({
      institucionExterior: [''],
      pais: [''],
      cuidad: [''],
      fechaSalida: [''],
      fechaRegreso: [''],
      duracionPrograma: [''],
      fuenteFinanciacion: [''],
      comentarios: [''],
    })

    this.formValueFiles = this.formBuilder.group({
      cartaMotivacion: [''],
      hojaDeVida: [''],
      cartaAutorizacion: [''],
      cartaCertificado: [''],
      cartaInforme: [''],
      cartaHomologacion: [''],
      cartaAutorizacionDirector: [''],
      cartaAceptacionEmpresa: [''],
      cartaAceptacionIdiomas: [''],
      cartaAceptacionPonencia: [''],
      cartaAutorizacionDecano: [''],
      cartaInvitacion: [''],
    })

    /*this.queryByStudentService.traerDocumentoByEstudiante(1).subscribe(e => {
      this.queryByStudent = e
      this.formValuePersonalInformation.get('nombreCompleto').setValue(e.nombre);
      this.formValuePersonalInformation.get('apellidos').setValue(e.apellido);
      this.formValuePersonalInformation.get('documentoIdentificacion').setValue(e.numeroDocumento);
      this.formValuePersonalInformation.get('direccionResidencia').setValue(e.direccion);
      this.formValuePersonalInformation.get('telefono').setValue(e.telefono);
      this.formValuePersonalInformation.get('tipoSangre').setValue(e.tipoSangre);
      this.formValuePersonalInformation.get('rh').setValue(e.rh);
      this.formValuePersonalInformation.get('nombreAcudiente').setValue(e.nombreAcudiente);
      this.formValuePersonalInformation.get('telefonoAcudiente').setValue(e.telefonoAcudiente);
      this.formValuePersonalInformation.get('parentesco').setValue(e.parentescoAcudiente);
      console.log(e);
    });*/

    this.formularioInscripcionService.traerFormularioById(1).subscribe(e => {
      this.formularioInscripcion = e
      this.formValuePersonalInformation.get('nombreCompleto').setValue(e.nombreCompleto);
      this.formValuePersonalInformation.get('apellidos').setValue(e.apellidos);
      this.formValuePersonalInformation.get('documentoIdentificacion').setValue(e.documentoIdentificacion);
      this.formValuePersonalInformation.get('direccionResidencia').setValue(e.direccionResidencia);
      this.formValuePersonalInformation.get('telefono').setValue(e.telefono);
      this.formValuePersonalInformation.get('tipoSangre').setValue(e.tipoSangre);
      this.formValuePersonalInformation.get('rh').setValue(e.rh);
      this.formValuePersonalInformation.get('nombreAcudiente').setValue(e.nombreAcudiente);
      this.formValuePersonalInformation.get('telefonoAcudiente').setValue(e.telefonoAcudiente);
      this.formValuePersonalInformation.get('parentesco').setValue(e.parentesco);
      this.formValuePersonalInformation.get('nacionalidad').setValue(e.nacionalidad); 
      this.formValuePersonalInformation.get('fechaNacimiento').setValue(e.fechaNacimiento);
      this.formValuePersonalInformation.get('sexo').setValue(e.sexo);
      this.formValuePersonalInformation.get('estadoCivil').setValue(e.estadoCivil);
      this.formValuePersonalInformation.get('numeroPasaporte').setValue(e.numeroPasaporte);
      this.formValuePersonalInformation.get('celular').setValue(e.celular);
      this.formValueAcademicInformation.get('facultad').setValue(e.facultad);
      this.formValueAcademicInformation.get('codigo').setValue(e.codigo);
      this.formValueAcademicInformation.get('programaAcademico').setValue(e.programaAcademico);
      this.formValueAcademicInformation.get('semestreAcademico').setValue(e.semestreAcademico);
      this.formValueAcademicInformation.get('jornada').setValue(e.jornada);
      this.formValueAcademicInformation.get('estado').setValue(e.estado);
      this.formValueAcademicInformation.get('promedioAcumulado').setValue(e.promedioAcumulado);
      this.formValueAcademicInformation.get('idiomas').setValue(e.idiomas);
      this.formValueInternationalInformation.get('institucionExterior').setValue(e.institucionExterior);
      this.formValueInternationalInformation.get('pais').setValue(e.pais);
      this.formValueInternationalInformation.get('cuidad').setValue(e.cuidad);
      this.formValueInternationalInformation.get('fechaSalida').setValue(e.fechaSalida);
      this.formValueInternationalInformation.get('fechaRegreso').setValue(e.fechaRegreso);
      this.formValueInternationalInformation.get('duracionPrograma').setValue(e.duracionPrograma);
      this.formValueInternationalInformation.get('fuenteFinanciacion').setValue(e.fuenteFinanciacion);
    });
  }

  crearFormularioInscripcion(): void {
    const formularioInscripcion: FormularioInscripcion = new FormularioInscripcion();
    formularioInscripcion.nombreCompleto = this.formValuePersonalInformation.value.nombreCompleto;
    formularioInscripcion.apellidos = this.formValuePersonalInformation.value.apellidos;
    formularioInscripcion.nacionalidad = this.formValuePersonalInformation.value.nacionalidad;
    formularioInscripcion.documentoIdentificacion = this.formValuePersonalInformation.value.documentoIdentificacion;
    formularioInscripcion.fechaNacimiento = this.formValuePersonalInformation.value.fechaNacimiento;
    formularioInscripcion.sexo = this.formValuePersonalInformation.value.sexo;
    formularioInscripcion.tipoSangre = this.formValuePersonalInformation.value.tipoSangre;
    formularioInscripcion.rh = this.formValuePersonalInformation.value.rh;
    formularioInscripcion.direccionResidencia = this.formValuePersonalInformation.value.direccionResidencia;
    formularioInscripcion.telefono = this.formValuePersonalInformation.value.telefono;
    formularioInscripcion.estadoCivil = this.formValuePersonalInformation.value.estadoCivil;
    formularioInscripcion.numeroPasaporte = this.formValuePersonalInformation.value.numeroPasaporte;
    formularioInscripcion.celular = this.formValuePersonalInformation.value.celular;
    formularioInscripcion.nombreAcudiente = this.formValuePersonalInformation.value.nombreAcudiente;
    formularioInscripcion.telefonoAcudiente = this.formValuePersonalInformation.value.telefonoAcudiente;
    formularioInscripcion.parentesco = this.formValuePersonalInformation.value.parentesco;
    formularioInscripcion.facultad = this.formValueAcademicInformation.value.facultad;
    formularioInscripcion.codigo = this.formValueAcademicInformation.value.codigo;
    formularioInscripcion.programaAcademico = this.formValueAcademicInformation.value.programaAcademico;
    formularioInscripcion.semestreAcademico = this.formValueAcademicInformation.value.semestreAcademico;
    formularioInscripcion.jornada = this.formValueAcademicInformation.value.jornada;    
    formularioInscripcion.estado = this.estado.nombre;
    formularioInscripcion.promedioAcumulado = this.formValueAcademicInformation.value.promedioAcumulado;
    formularioInscripcion.idiomas = this.formValueAcademicInformation.value.idiomas;
    formularioInscripcion.institucionExterior = this.formValueInternationalInformation.value.institucionExterior;
    formularioInscripcion.pais = this.formValueInternationalInformation.value.pais;
    formularioInscripcion.cuidad = this.formValueInternationalInformation.value.cuidad;
    formularioInscripcion.fechaSalida = this.formValueInternationalInformation.value.fechaSalida;
    formularioInscripcion.fechaRegreso = this.formValueInternationalInformation.value.fechaRegreso;
    formularioInscripcion.duracionPrograma = this.formValueInternationalInformation.value.duracionPrograma;
    formularioInscripcion.fuenteFinanciacion = this.formValueInternationalInformation.value.fuenteFinanciacion;
    formularioInscripcion.comentarios = this.formValueInternationalInformation.value.comentarios;
    console.log("ingresó al metodo crear " + formularioInscripcion);
    this.formularioInscripcionService.crearFormularioInscripcion(formularioInscripcion)
      .subscribe(res => {
        alert("(Secretaria) Estado actualizado exitosamente.");
        let ref = document.getElementById('cancelar')
        ref?.click();
      })
  }

updateFormularioInscripcion(): void {
  const formularioInscripcion: FormularioInscripcion = new FormularioInscripcion();
  formularioInscripcion.nombreCompleto = this.formValuePersonalInformation.value.nombreCompleto;
  formularioInscripcion.apellidos = this.formValuePersonalInformation.value.apellidos;
  formularioInscripcion.nacionalidad = this.formValuePersonalInformation.value.nacionalidad;
  formularioInscripcion.documentoIdentificacion = this.formValuePersonalInformation.value.documentoIdentificacion;
  formularioInscripcion.fechaNacimiento = this.formValuePersonalInformation.value.fechaNacimiento;
  formularioInscripcion.sexo = this.formValuePersonalInformation.value.sexo;
  formularioInscripcion.tipoSangre = this.formValuePersonalInformation.value.tipoSangre;
  formularioInscripcion.rh = this.formValuePersonalInformation.value.rh;
  formularioInscripcion.direccionResidencia = this.formValuePersonalInformation.value.direccionResidencia;
  formularioInscripcion.telefono = this.formValuePersonalInformation.value.telefono;
  formularioInscripcion.estadoCivil = this.formValuePersonalInformation.value.estadoCivil;
  formularioInscripcion.numeroPasaporte = this.formValuePersonalInformation.value.numeroPasaporte;
  formularioInscripcion.celular = this.formValuePersonalInformation.value.celular;
  formularioInscripcion.nombreAcudiente = this.formValuePersonalInformation.value.nombreAcudiente;
  formularioInscripcion.telefonoAcudiente = this.formValuePersonalInformation.value.telefonoAcudiente;
  formularioInscripcion.parentesco = this.formValuePersonalInformation.value.parentesco;
  formularioInscripcion.facultad = this.formValueAcademicInformation.value.facultad;
  formularioInscripcion.codigo = this.formValueAcademicInformation.value.codigo;
  formularioInscripcion.programaAcademico = this.formValueAcademicInformation.value.programaAcademico;
  formularioInscripcion.semestreAcademico = this.formValueAcademicInformation.value.semestreAcademico;
  formularioInscripcion.jornada = this.formValueAcademicInformation.value.jornada;
  formularioInscripcion.estado = this.estado.nombre;
  formularioInscripcion.promedioAcumulado = this.formValueAcademicInformation.value.promedioAcumulado;
  formularioInscripcion.idiomas = this.formValueAcademicInformation.value.idiomas;
  formularioInscripcion.institucionExterior = this.formValueInternationalInformation.value.institucionExterior;
  formularioInscripcion.pais = this.formValueInternationalInformation.value.pais;
  formularioInscripcion.cuidad = this.formValueInternationalInformation.value.cuidad;
  formularioInscripcion.fechaSalida = this.formValueInternationalInformation.value.fechaSalida;
  formularioInscripcion.fechaRegreso = this.formValueInternationalInformation.value.fechaRegreso;
  formularioInscripcion.duracionPrograma = this.formValueInternationalInformation.value.duracionPrograma;
  formularioInscripcion.fuenteFinanciacion = this.formValueInternationalInformation.value.fuenteFinanciacion;
  formularioInscripcion.comentarios = this.formValueInternationalInformation.value.comentarios;
  console.log("ingresó al metodo update formulario " + formularioInscripcion + formularioInscripcion.formularioId);
  this.formularioInscripcionService.updateFormularioInscripcion(formularioInscripcion, formularioInscripcion.formularioId)
    .subscribe(res => {
      alert("Comentario ingresado exitosamente.");
      let ref = document.getElementById('cancelar')
      ref?.click();
    })
}

selectFile(event): void {
  this.selectedFiles = event.target.files;
}

upload(): void {
  this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
  console.log("ingresó al método cargar archivos" + this.currentFile);
  this.uploadService.save(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.uploadService.getFiles();
      }
    },
    err => {
      this.progress = 0;
      this.message = 'No se pudo cargar el archivo!';
      this.currentFile = undefined;
    });
  this.selectedFiles = undefined;
}

  /*capturarFile(event): any{
    const archivoCapturado = event.target.file[0];
    this.archivos.push(archivoCapturado);
  }

  subirArchivo(): any {
      const documento : Documento = new Documento();
      documento.cartaMotivacion = this.formValueFiles.value.cartaMotivacion;

      console.log("ingresó al metodo crear documento" + documento);
      this.documentoService.crearDocumento(documento)
        .subscribe(res => {
          alert("Documentos estudiante ingresados exitosamente.");
          let ref = document.getElementById('cancelar')
          ref?.click();
        })

      /*this.archivos.array.forEach(this.archivos => {
        console.log(archivos);
        formularioDeDatos.append('files', archivos)
      })
      this.rest.post
  }*/

}
