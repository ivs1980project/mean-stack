export class Libro {
    titulo: string;
    constructor(
        titulo: string,
        private autor: string,
        private sinopsis?: string
    ) { }
    toString(): string {
        return "Libro: \n\tTitulo: " + this.titulo +
            "\n\tAutor: " + this.autor + "\n\tSinopsis: " + this.sinopsis;
    }
}
