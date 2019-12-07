class Livro {
	constructor(nome, genero, autxr, qtdPaginas){
		this._nome = nome,
		this._genero = genero,
		this._autxr = autxr,
		this._qtdPaginas = qtdPaginas 
	}

	//SET
	set nome(newNome) {
		this._nome = newNome
	}
	set genero(newGenero) {
		this._genero = newGenero
	}
	set autor(newAutxr) {
		this._autxr = newAutxr
	}
	
	set qtdPaginas(newQtdPaginas) {
		this._qtdPaginas = newQtdPaginas
	}
	
	//GET
	get nome() {
		return this._nome
	}
	get genero(){
		return this._genero
	}

	get autxr(){
		return this._autxr
	}
	
	get qtdPaginas(){
		return this._qtdPaginas
	}
}

const meuLivro = new Livro ('Jurassic Park','Aventura', 'Michael Crichton', 60)
console.log(`Estou lendo o livro ${meuLivro.nome}, do gênero ${meuLivro.genero} e seu autxr é ${meuLivro.autxr}. Eu já li ${meuLivro.qtdPaginas} páginas!`)