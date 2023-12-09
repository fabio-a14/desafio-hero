//criação de classe

class Hero {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }
// metodo da classe
  atacar() {
      let ataque = '';
      switch (this.tipo) {
          case 'mago':
              ataque = 'usou magia';
              break;
          case 'guerreiro':
              ataque = 'usou espada';
              break;
          case 'monge':
              ataque = 'usou artes marciais';
              break;
          case 'ninja':
              ataque = 'usou shuriken';
              break;
          default:
              ataque = 'usou um ataque especial';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

//instanciando um objeto
const meuHeroi = new Hero('Fulano', 25, 'ninja');
meuHeroi.atacar();



