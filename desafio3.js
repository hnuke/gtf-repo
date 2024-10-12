



// classes
class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    TipoAtaque(tipo){
        let resu = "";
        if (tipo == "guerreiro"){
            resu = "usou espada"
        }
        else if (tipo == "mago"){
            resu = "usou magia";
        }
        else if (tipo == "monge"){
            resu = "usou artes marciais";
        }
        else if (tipo == "ninja"){
            resu = "usou sjuriken";
        }
        return resu;
    }

    Atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.TipoAtaque(this.tipo)}`)
    }
}

// main
ronaldo = new Heroi("ronaldo",25,"mago");
geberson = new Heroi("geberson", 25, "guerreiro");

ronaldo.Atacar();

geberson.Atacar();