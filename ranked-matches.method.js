const { label } = require("./ranked-matches.mock");

class Ranked {
  /*** @param {Number} balance */
  get(balance) {
    throw new Error(`This ${balance} method should be overridden!`);
  }
}

class FerroRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance < 10 ? label.ferro : null;
  }
}

class BronzeRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 11 && balance <= 20 ? label.bronze : null;
  }
}

class PrataRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 21 && balance <= 50 ? label.prata : null;
  }
}

class OuroRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 51 && balance <= 80 ? label.ouro : null;
  }
}

class DiamanteRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 81 && balance <= 90 ? label.diamante : null;
  }
}

class LendarioRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 91 && balance <= 100 ? label.lendario : null;
  }
}

class ImortalRanked extends Ranked {
  /*** @param {Number} balance */
  get(balance) {
    return balance >= 101 ? label.imortal : null;
  }
}

class RankedMatches {
  #victories;
  constructor() {
    this.#victories = [
      new FerroRanked(),
      new BronzeRanked(),
      new PrataRanked(),
      new OuroRanked(),
      new DiamanteRanked(),
      new LendarioRanked(),
      new ImortalRanked(),
    ];
  }

  /*** @param {Number} balance */
  get(balance) {
    for (let victory of this.#victories) {
      const response = victory.get(balance);
      if (response) return response;
    }
    return label.unknown;
  }
}

module.exports = { RankedMatches };
