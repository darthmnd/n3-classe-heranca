class Absorvente {
    constructor(tipo, fluxo) {
    this._tipo = tipo,
    this._fluxo = fluxo
}
    get tipo() {
        return this._tipo
    }
    get fluxo() {
        return this._fluxo
    }

}

class AbsInterno extends Absorvente {
    constructor(tipo, fluxo) {
        super(tipo, fluxo)
    }
}

const meuFluxo = new AbsInterno('interno', 'moderado')
console.log(`Utilizo o absorvente ${meuFluxo.tipo} quando meu fluxo está ${meuFluxo.fluxo}! :)`)