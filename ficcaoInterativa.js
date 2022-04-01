console.clear();
const prompt = require("prompt-sync")();

console.log(`A muito tempo um Dragao chamado Diaself vem atormentando o reino de Mountains of Paevas,`);
console.log();
console.log(`e nesse reino tem uma familia peculiar que passa suas memorias e seu nome para a proxima geraçao assim que o atual heroi morre,`);
console.log();
console.log(`certo dia o heroi atual foi morto pelo demonio e passou suas memorias para o seu filho, `);



const personagem = prompt("Digite o nome do seu personagem: ");

let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0
}

function passarTempo(day, hour, min, seg) {
    tempo.dia += day
    tempo.hora += hour
    tempo.minuto += min
    tempo.segundo += seg
    while (tempo.hora > 24) {
        tempo.dia++;
        tempo.hora -= 24;
        if (tempo.hora < 24) { break; }
    }
    while (tempo.minuto >= 60) {
        tempo.hora++;
        tempo.minuto -= 60;
        if (tempo.minuto < 60) { break; }
    }
    while (tempo.segundo >= 60) {
        tempo.minuto++;
        tempo.segundo -= 60;
        if (tempo.segundo < 60) { break; }
    }

}
// tempo.passarTempo( /*dia a ser passada*/ , /*hora a ser passado*/ , /*minuto a ser passado*/ );


let statusPersonagem = {
    saude: 1000,
    dano: 0
}

function descansar() {
    if (tempo.hora > 20) {
        tempo.dia++;
        passarTempo(0, 7, 0, 0);
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

let dragao = {
    saude: 10000,
    dano: 1000
}

function batalha(inimigo, personagem) {
    console.log("Comecou a batalha");
    console.log(inimigo.saude);
    while (inimigo.saude > 0) {
        personagem.saude -= inimigo.dano;
        inimigo.saude -= personagem.dano;
        if (inimigo.saude < 1) {
            break;
        }
    }
    console.log(inimigo.saude);
    console.log(personagem.saude);
    return personagem.saude
}
passarTempo(0, 7, 0, 0);
console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);

function cidade(statusPersonagem) {
    // console.clear();
    let aleatorio = Math.floor(Math.random() * 10);
    console.log(`${personagem} Decide se vai para a cidade. `)
    console.log(`Para ir na cidade ele gasta 1 hora`);
    let pergunta = prompt("Deseja entrar na cidade? ").toLowerCase();
    console.log()
    console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`)
    if (pergunta == "sim" || pergunta == "s" || pergunta == "claro") {
        console.log(`${personagem} Decide ir para a cidade. `);
        console.clear();
        passarTempo(0, 1, 0, 0);
        console.log(`O bravo heroi ${personagem} foi para a cidade`);
        console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        console.log();
        console.log(`O heroi ${personagem} pensa em ir no ferreiro, armeiro ou treinador`);
        console.log()
        console.log(`Sabendo que para ir no Ferreiro ele gasta 4 horas`);
        console.log(`É para ir no Armeiro ele gasta 3 horas e 30 minutos`);
        console.log(`É para ir no Treinador ele gasta 3 horas`);
        let cidade = prompt("Digite onde deseja ir na cidade: Ferreiro, Armeiro ou Treinador: ").toLowerCase();
        if (cidade == "ferreiro" || cidade == "f") {
            console.clear();
            console.log("O ferreiro lhe deu uma espada de 25 de dano");
            statusPersonagem.dano += 25;
            passarTempo(0, 4, 0, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        } else if (cidade == "armeiro" || cidade == "a") {
            console.clear();

            console.log("O armeiro lhe deu um arco de 20 de dano ");
            statusPersonagem.dano += 20;
            passarTempo(0, 3, 30, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        } else if (cidade == "treinador" || cidade == "t") {
            console.clear();

            console.log("O treinador lhe ensinou uma arte marcial milenar com 15 de dano");
            statusPersonagem.dano += 15;
            passarTempo(0, 3, 0, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        } else if (aleatorio == 5) {
            console.clear();
            console.log(`Voce estava andando pela cidade e veio um cavalo e te atropelou`);
            passarTempo(0, 27, 0, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        }

    } else if (pergunta == "nao" || pergunta == "n") {
        console.log(`O bravo heroi ${personagem} resolveu ficar em casa durante toda a manhã`);
    } else {
        console.log("Resposta errada");
        pergunta = prompt("Deseja sair de casa? ");
    }
    descansar();
    return statusPersonagem;

}

function tarde(statusPersonagem) {
    // console.clear();
    console.log("O bravo heroi sai em busca do dragao no caminho ele encontra a famosa dungeon Atrocraphia");
    console.log(``);
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
            console.log(`O heroi derrotou o minotauro e ganhou espada "Corte da chama eterna" com 150 de dano`);
            statusPersonagem.dano += 150;
            console.log();
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
            passarTempo(0, 2, 0, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        } else if (dungeon == "centro" || dungeon == "c" || dungeon == "agua") {
            console.log(`O heroi ${personagem} andando dentro da dungeon ele encontra um lago`);
            console.log(`Vendo que o lago e sua unica saida ele mergulha`);
            console.log(`E la ele encontra o umibozu com ${umibozu.saude} de vida e ${umibozu.dano} de dano`);
            batalha(umibozu, statusPersonagem);
            console.log(`O heroi derrotou o umibozu e ganhou o arco "Olho e Mão de Vecna" com 100 de dano`);
            statusPersonagem.dano += 100;
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
            console.log();
            passarTempo(0, 2, 30, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        } else if (dungeon == "direita" || dungeon == "d" || dungeon == "terra") {
            console.log(`O heroi ${personagem} andando dentro da dungeon ele encontra um lago`);
            console.log(`Vendo que o lago e sua unica saida ele mergulha`);
            console.log(`E la ele encontra o golem com ${golem.saude} de vida e ${golem.dano} de dano`);
            batalha(golem, statusPersonagem);
            console.log(`O heroi derrotou o golem e ganhou a pedra de recuperacao de saude que recupera 100 de saude`);
            statusPersonagem.saude += 1000;
            console.log(statusPersonagem.saude, minotauro.saude);
            console.log(statusPersonagem);
            console.log();
            passarTempo(0, 2, 0, 0);
            console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        }
    } else if (pergunta == "nao" || pergunta == "n") {
        console.log("O heroi retornou para casa");
    }
    return statusPersonagem
}

function taverna() {
    console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
    let canecos = 0;
    let pergunta = prompt("Deseja beber um caneco de cerveja? ").toLowerCase();
    if (pergunta == "sim" || pergunta == "s" || pergunta == "claro") {
        canecos++;
        for (let i = 0; i > 30; i++) {
            pergunta = prompt("Deseja beber mais um caneco de cerveja? ");
            if (i == 20) {
                console.clear();
                console.log(canecos);
                console.log("Voce bebeu demais e saiu com uma mulher");
                console.log("E dormiu demais. ");
                passarTempo(0, 10, 0, 0);
                break;
            }
        }
    }
}


function noite(statusPersonagem) {
    console.clear();
    console.log(`O bravo heroi saiu da dungeon com vida`);
    console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
    let pergunta = prompt("Deseja voltar para casa? ").toLowerCase();
    let resposta
    let perguntaDragao;
    if (pergunta == "sim" || pergunta == "s" || pergunta == "claro") {
        console.log(`Sao ${tempo.hora} horas e ${tempo.minuto} minutos do dia ${tempo.dia}`);
        console.log("O heroi voltou para casa");
    } else if (pergunta == "nao" || pergunta == "n") {
        console.log("O heroi decide nao voltar para casa");
        console.log("Deseja ir para taverna?");
        console.log("Ou deseja andar aleatorio pelo mapa");
        let aleatorio = 9 //Math.floor(Math.random() * 10)
        resposta = prompt("Oque voce deseja fazer? ").toLowerCase();
        if (resposta == "taverna" || resposta == "beber") {
            console.log("O heroi entra na taverna e pega um copo para beber");
            taverna();
        } else if (resposta == "aleatorio" || resposta == "andar") {
            if (aleatorio == 9) {
                console.log(`Voce estava andando pela vila e o dragao Diaself apareceu`);
                perguntaDragao = prompt(`Deseja lutar com o dragao? `).toLowerCase();
                if (perguntaDragao == "sim" || pergunta == "s" || pergunta == "claro") {
                    batalha(dragao, statusPersonagem);
                }
            }
        } else {
            console.log(`ola mundo`);
        }
    }
    descansar();
}

// batalha(minotauro, statusPersonagem);

while (true) {
    cidade(statusPersonagem);
    tarde(statusPersonagem);
    noite(statusPersonagem);
}
// }
// // // let dano = cidade(statusPersonagem);
// // // console.log(dano);

// // // let dano;
// // while (tempo.dia < 3) {
// //     let dano = cidade(statusPersonagem);
// //     console.log(dano);
// //     let danoNaDungeon = tarde(statusPersonagem);
// //     console.log(danoNaDungeon);
// //     tempo.dia++;
// // }
// // // let danoNaDungeon = dungeon(statusPersonagem);
// // // console.log(danoNaDungeon);
// // // console.log(statusPersonagem);
// // // let danoNaDungeon;
// // //     dano = cidade(statusPersonagem);
// // //     console.log(dano);
// // //     tempo.dia++;
// // // }