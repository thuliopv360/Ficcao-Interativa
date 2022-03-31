console.clear();
const prompt = require("prompt-sync")();


const personagem = prompt("Digite o nome do seu personagem: ");

let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
    passarTempo: function(hour, min, seg) {
        hour += this.hour
        min += this.minuto;
        seg += this.segundo;
        console.log(`${this.dia} : ${this.hora} : ${this.minuto} : ${this.segundo}`);
        while (this.hora >= 24) {
            this.dia++;
            hour -= 24;
            console.log(hour)
            while (min >= 60) {
                this.hora++;
                min -= 60;
                console.log(min)
                if (min < 60) { break; }
                while (seg >= 60) {
                    this.minuto++;
                    seg -= 60;
                    console.log(seg)
                    if (seg < 60) { break; }
                }
            }

        }
        console.log(`${this.dia} : ${this.hora} : ${this.minuto} : ${this.segundo}`);
    }
}

let statusPersonagem = {
    saude: 1000,
    fome: 1000,
    dano: 0,
    verificaSaude: function() {
        if (this.saude <= 100 || this.fome <= 100) {
            console.log(`O heroi retornou para casa`);
            console.log(`E sua saude foi recuperada`);
            this.saude == 1000;
            this.fome == 1000;
        }
        return this.saude && this.fome;
    }
}
let minotauro = {
    saude: 100,
    dano: 100
}
let umibozu = {
    saude: 150,
    dano: 75
}
let golem = {
    saude: 200,
    dano: 50
}
console.log(`A muito tempo um Dragao chamado Diaself vem atormentando o reino de Mountains of Paevas,`);
console.log();
console.log(`e nesse reino tem uma familia peculiar que passa suas memorias e seu nome para a proxima geraçao assim que o atual heroi morre,`);
console.log();
console.log(`certo dia o heroi atual foi morto pelo demonio e passou suas memorias para o seu filho, `);
console.log();
console.log(`pela manha ele acorda e decide se vai para a cidade ou se fica em casa `);

function batalha(inimigo, personagem) {
    while (inimigo.saude > 0) {
        personagem.saude = personagem.saude - inimigo.dano;
        inimigo.saude = inimigo.saude - personagem.dano;
        if (inimigo.saude = 0) {
            break;
        }
    }
    return personagem.saude
}

function cidade(statusPersonagem) {
    let pergunta = prompt("Deseja sair de casa? Essa escolha pode demorar 04:00 horas").toLowerCase();
    if (pergunta == "sim" || pergunta == "s" || pergunta == "claro") {
        console.log(`O bravo heroi ${personagem} foi para a cidade`);
        console.log(`Para onde o heroi ira?`);
        let cidade = prompt("Digite onde deseja ir na cidade: Ferreiro, Armeiro ou Treinador: ").toLowerCase();
        if (cidade == "ferreiro") {
            console.log("O ferreiro lhe deu uma espada de 25 de dano");
            statusPersonagem.dano += 25
        } else if (cidade == "armeiro") {
            console.log("O armeiro lhe deu um arco de 20 de dano ");
            statusPersonagem.dano += 20
        } else if (cidade == "treinador") {
            console.log("O treinador lhe ensinou uma arte marcial milenar com 15 de dano");
            statusPersonagem.dano += 15
        } else {
            console.log("Resposta errada");
        }
        console.log("Ele ficou o resto da manha na cidade");
    } else if (pergunta == "nao" || pergunta == "n") {
        console.log(`O bravo heroi ${personagem} resolveu ficar em casa durante toda a manhã`);
    } else {
        console.log("Resposta errada");
        pergunta = prompt("Deseja sair de casa? ");
    }
    return statusPersonagem
}


function dungeon(statusPersonagem) {
    console.log("O bravo heroi sai em busca do demonio no caminho ele encontra a famosa dungeon Atrocraphia");
    let pergunta = prompt("Deseja entrar na dungeon? ");
    if (pergunta == "sim" || pergunta == "s" || pergunta == "claro") {
        console.log(`O Heroi ${personagem} entrou na dungeon e se depara com uma encruzilhada`);
        console.log("Escrito em cada entrada ");
        console.log("Entrada da esquerda: fogo");
        console.log("Entrada da centro: agua");
        console.log("Entrada da direita: terra");
        let dungeon = prompt("Deseja ir por qual lado? ").toLowerCase();
        if (dungeon == "esquerda" || dungeon == "e" || dungeon == "fogo") {
            console.log(`O heroi ${personagem} continua andando dentro da dungeon`);
            console.log(`E la ele encontra o minotauro com ${minotauro.saude} de vida e ${minotauro.dano} de dano`);
            batalha(minotauro, statusPersonagem);
            console.log();
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
        } else if (dungeon == "centro" || dungeon == "c" || dungeon == "agua") {
            console.log(`O heroi ${personagem} andando dentro da dungeon ele encontra um lago`);
            console.log(`Vendo que o lago e sua unica saida ele mergulha`);
            console.log(`E la ele encontra o umibozu com ${umibozu.saude} de vida e ${umibozu.dano} de dano`);
            batalha(umibozu, statusPersonagem);
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
            console.log()
        } else if (dungeon == "direita" || dungeon == "d" || dungeon == "terra") {
            console.log(`O heroi ${personagem} andando dentro da dungeon ele encontra um lago`);
            console.log(`Vendo que o lago e sua unica saida ele mergulha`);
            console.log(`E la ele encontra o golem com ${golem.saude} de vida e ${golem.dano} de dano`);
            batalha(golem, statusPersonagem);
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
            console.log()
        }
    } else if (pergunta == "nao" || pergunta == "n") {
        console.log("O heroi retornou para casa")
    }
    return statusPersonagem
}


// let dano = cidade(statusPersonagem);
// console.log(dano);

// let dano;
while (tempo.dia < 3) {
    let dano = cidade(statusPersonagem);
    console.log(dano);
    let danoNaDungeon = dungeon(statusPersonagem);
    console.log(danoNaDungeon);
    tempo.dia++;
}
// let danoNaDungeon = dungeon(statusPersonagem);
// console.log(danoNaDungeon);
// console.log(statusPersonagem);
// let danoNaDungeon;
//     dano = cidade(statusPersonagem);
//     console.log(dano);
//     tempo.dia++;
// }