import { Estado } from './estado';
import { Facultad } from './facultad';
import { ProgramaAcademico } from './programa-academico';
export class FormularioInscripcion {

    public formularioId : number;
    public nombreCompleto : String;
    public apellidos : String;
    public nacionalidad : String;
    public documentoIdentificacion : String;
    public fechaNacimiento : Date;
    public sexo : String;
    public tipoSangre : String;
    public rh : String;
    public direccionResidencia : String;
    public telefono : String;
    public estadoCivil : String;
    public numeroPasaporte : String;
    public celular : String;
    public nombreAcudiente : String;
    public telefonoAcudiente : String;
    public parentesco : String;
    public facultad : String;
    public codigo : String;
    public programaAcademico : String;
    public semestreAcademico : String;
    public jornada : String;
    public promedioAcumulado : String;
    public idiomas : String;
    public institucionExterior : String;
    public pais : String;
    public cuidad : String;
    public fechaSalida : Date;
    public fechaRegreso : Date;
    public duracionPrograma : String;
    public fuenteFinanciacion : String;
    public estado : Estado;
}
