import { ConveniosInternacionales } from './convenios-internacionales';
import { ProgramaAcademico } from './programa-academico';
import { Usuario } from './usuario';

export class Estudiante {

    public estudianteId : number;
    public tipoSangre : String;
    public rh : String;
    public nombreAcudiente : String;
    public numeroPasaporte : String;
    public parentescoAcudiente : String;
    public conveniosInternacionales : ConveniosInternacionales;
    public usuario : Usuario;
    public programaAcademico : ProgramaAcademico;
    public numeroAcudiente : String;
}
