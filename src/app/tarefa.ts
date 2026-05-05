export class Tarefa {
    public _id?: string; // O '?' indica que o ID é opcional (pode ser undefined)
    public descricao: string;
    public statusRealizada: boolean;

    constructor(descricao: string, statusRealizada: boolean, _id?: string) {
        this.descricao = descricao;
        this.statusRealizada = statusRealizada;
        if (_id) {
            this._id = _id;
        }
    }
}