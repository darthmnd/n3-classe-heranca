class Livro {
	constructor(nome, genero, autor, qtdPaginas){
		this._nome = nome,
		this._genero = genero,
		this._autor = autor,
		this._qtdPaginas = qtdPaginas 
	}

	//SET
	set nome(newNome) {
		this._nome = newNome
	}
	set genero(newGenero) {
		this._genero = newGenero
	}
	set autor(newAutor) {
		this._autor = newAutor
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

	get autor(){
		return this._autor
	}
	
	get qtdPaginas(){
		return this._qtdPaginas
	}
}

const meuLivro = new Livro ('Jurassic Park','Aventura', 'Michael Crichton', 60)
console.log(`Estou lendo o livro ${meuLivro.nome}, do gênero ${meuLivro.genero} e seu/sua autor(a) é ${meuLivro.autor}. Eu já li ${meuLivro.qtdPaginas} páginas!`)
