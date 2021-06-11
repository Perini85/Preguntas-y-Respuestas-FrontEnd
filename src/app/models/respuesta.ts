export class Respuesta {

    id?: number;
    descripcion: string;
    esCorrecta: boolean;


    constructor(descripcion: string, eCorrecta:boolean, id?: number){

        this.id =id;
        this.descripcion= descripcion;
        this.esCorrecta = this.esCorrecta;
    }

}
