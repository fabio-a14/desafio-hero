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
              ataque = ' magia';
              break;
          case 'guerreiro':
              ataque = ' uma espada';
              break;
          case 'monge':
              ataque = 'artes marciais';
              break;
          case 'ninja':
              ataque = 'um shuriken';
              break;
          default:
              ataque = ' um ataque especial';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

//instanciando um objeto
const meuHeroi = new Hero('Fabio', 36, 'ninja');
const meuHeroi2= new Hero("jair",45,"guerreiro")
const meuHeroi3= new Hero("kaue",16,"mago")
const meuHeroi4= new Hero("josé",60,"monge")
const meuHeroi5= new Hero("Gui",30,"soldado")
meuHeroi.atacar();
meuHeroi2.atacar()
meuHeroi3.atacar()
meuHeroi4.atacar()
meuHeroi5.atacar()


