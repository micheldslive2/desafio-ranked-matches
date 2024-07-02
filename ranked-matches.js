const readline = require("readline");
const { RankedMatches } = require("./ranked-matches.method");
const { label } = require("./ranked-matches.mock");

/***
 * @param {String} victories
 * @param {String} defeats
 */
function balanceCalculator(victories, defeats) {
  victories = Number(victories);
  defeats = Number(defeats);

  if (!isNaN(victories) && !isNaN(defeats)) {
    return victories - defeats;
  }
  return label.unknown;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Quantas vitórias você obteve? (digite apenas números):",
  (victories) => {
    rl.question(
      "Quantas derrotas você obteve? (digite apenas números):",
      (defeats) => {
        const balance = balanceCalculator(victories, defeats);
        const ranked = new RankedMatches();

        console.log(
          `O Herói tem de saldo de **${balance}** está no nível **${ranked.get(
            balance
          )}**`
        );

        rl.close();
      }
    );
  }
);
