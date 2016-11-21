var setup = function(largura, altura, personagem, objetivo) {
	var mapa = iniciarMapa(largura, altura);
	mapa = iniciarPersonagem(personagem, mapa);
	mapa = iniciarObjetivo(objetivo, mapa);
	return mapa;
};


/*
	Nome: iniciarMapa
	Argumentos: 
		largura - numero de colunas do mapa - inteiro.
		altura - numero de linhas do mapa - inteiro.
	Funcao responsavel por declarar e inicializar o mapa com os obstaculos de forma aleatória.
	Saída: Um vetor com largura colunas e altura linhas preenchido com '.' e '#'.
*/
var iniciarMapa = function(largura, altura) {
	//TODO: Criar um vetor com duas dimensões contendo 'largura' colunas e 'altura' linhas.
	//preencher o vetor com '.' ou '#' de forma aleatória.
	//EXEMPLO de RESULTADO:
	// . . . . . # # . . .
	// # . . # * . . # # .
	// . . . . . # # # . .
	// No mapa temos 9 '#' e 21 '.'.
	// Largura é 10 e altura 3
	//FIM EXEMPLO
	// Retorno da função é esse vetor
};


/*
	Nome: iniciarPersonagem
	Argumentos: 
		personagem - vetor de duas posicoes que representa a posicao do personagem. - [x,y]
		mapa - vetor de 2 dimensões representando o mapa.
	Funcao responsavel por adicionar no mapa o personagem representado por '@'.
	Saída: Mapa com '@' na posicao personagem[0] e personagem[1].
*/
var iniciarPersonagem = function(personagem, mapa) {
	//TODO:
};


/*
	Nome: iniciarObjetivo
	Argumentos: 
		objetivo - vetor de duas posicoes que representa a posicao do objetivo. - [x,y]
		mapa - vetor de 2 dimensões representando o mapa.
	Funcao responsavel por adicionar no mapa o objetivo representado por '*'.
	Saída: Mapa com '*' na posicao objetivo[0] e objetivo[1].
*/
var iniciarObjetivo = function(objetivo, mapa) {
	//TODO:
};

/*
	Nome: facaMovimento
	Argumentos: 
		personagem - vetor de duas posicoes que representa a posicao do personagem. - [x,y]
		mapa - vetor de 2 dimensões representando o mapa.
		dir - vetor de duas posicoes que mostra qual direção o personagem está seguindo. [x,y]
	Funcao responsavel por realizar o movimento do personagem.
	Saída: Verdadeiro se conseguiu executar o movimento ou falso caso contrário.
*/
var facaMovimento = function (mapa, personagem, dir) {

};

/*
	Nome: podeIr
	Argumentos: 
		personagem - vetor de duas posicoes que representa a posicao do personagem. - [x,y]
		mapa - vetor de 2 dimensões representando o mapa.
		altura - altura do mapa
		largura - largura do mapa
		dir - vetor de duas posicoes que mostra qual direção o personagem está seguindo. [x,y]
	Funcao responsavel por verificar se o movimento é válido ou não.
	Saída: Verdadeiro se o movimento é válido e falso caso contrário.
*/
var podeIr = function(mapa, personagem, altura, largura, dir) {

};