const players = [
  { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
  { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
  { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
  { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
  { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
  {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
  },
];

// Sortear dois jogadores aleatórios
async function getRandomPlayer() {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
}

const player1 = await getRandomPlayer();
let player2;
do {
  player2 = await getRandomPlayer();
} while (player1.NOME === player2.NOME);

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Extra: sortear aleatoriamente se é um casco(-1 ponto) ou um bomba(-2 pontos)
const items = [
  { NOME: "Casco", PONTOS: 1, ICONE: "🐢" },
  { NOME: "Bomba", PONTOS: 2, ICONE: "💣" },
];

// Sortear um item aleatório
async function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
  return result;
}

async function logRollResult(charName, block, diceResult, attribute) {
  console.log(
    `${charName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(char1, char2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);
    // sorteia o bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //   Teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + char1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + char2.VELOCIDADE;

      await logRollResult(
        char1.NOME,
        "velocidade",
        diceResult1,
        char1.VELOCIDADE
      );
      await logRollResult(
        char2.NOME,
        "velocidade",
        diceResult2,
        char2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + char1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + char2.MANOBRABILIDADE;

      await logRollResult(
        char1.NOME,
        "manobrabilidade",
        diceResult1,
        char1.MANOBRABILIDADE
      );
      await logRollResult(
        char2.NOME,
        "manobrabilidade",
        diceResult2,
        char2.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + char1.PODER;
      let powerResult2 = diceResult2 + char2.PODER;
      // sorteia o item
      let item = await getRandomItem();

      console.log(`${char1.NOME} confrontou ${char2.NOME}! 🥊`);

      await logRollResult(char1.NOME, "poder", diceResult1, char1.PODER);
      await logRollResult(char2.NOME, "poder", diceResult2, char2.PODER);

      if (powerResult1 > powerResult2) {
        console.log(
          `${char1.NOME} venceu o confronto usando um(a) ${item.NOME}! ${char2.NOME} perdeu ${item.PONTOS} ponto(s) ${item.ICONE}`
        );
        // Evitar valores negativos retornando a subtração se qtd de pontos > 0, senão retorna 0
        char2.PONTOS = Math.max(0, (char2.PONTOS -= item.PONTOS));
      } else if (powerResult2 > powerResult1) {
        console.log(
          `${char2.NOME} venceu o confronto usando um(a) ${item.NOME}! ${char1.NOME} perdeu ${item.PONTOS} ponto(s) ${item.ICONE}`
        );
        char1.PONTOS = Math.max(0, (char1.PONTOS -= item.PONTOS));
      } else if (powerResult1 === powerResult2) {
        console.log("Empate! Ninguém perdeu pontos.");
      }
      console.log(
        `Pontos: ${char1.NOME} - ${char1.PONTOS} | ${char2.NOME} - ${char2.PONTOS}`
      );
    }

    if (block !== "CONFRONTO") {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${char1.NOME} marcou um ponto!`);
        char1.PONTOS++;
      } else if (totalTestSkill1 < totalTestSkill2) {
        console.log(`${char2.NOME} marcou um ponto!`);
        char2.PONTOS++;
      } else if (totalTestSkill1 === totalTestSkill2) {
        console.log("Empate! Ninguém marcou ponto.");
      }
      console.log(
        `Pontos: ${char1.NOME} - ${char1.PONTOS} | ${char2.NOME} - ${char2.PONTOS}`
      );
      console.log("-------------------------------");
    }
  }
}

async function declareWinner(char1, char2) {
  console.log("🏁🏆 Fim da corrida! 🏆🏁");
  console.log(`${char1.NOME} - ${char1.PONTOS} pontos`);
  console.log(`${char2.NOME} - ${char2.PONTOS} pontos`);

  if (char1.PONTOS > char2.PONTOS) console.log(`\n${char1.NOME} venceu! 🏆`);
  else if (char2.PONTOS > char1.PONTOS)
    console.log(`\n${char2.NOME} venceu! 🏆`);
  else console.log("\nEmpate!");

  console.log("Obrigado por jogar!");
}

// Função auto-invocada = (função(){})()
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
