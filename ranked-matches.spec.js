const { RankedMatches } = require("./ranked-matches.method");
const { label } = require("./ranked-matches.mock");

describe("RankedMatches", () => {
  const ranked = new RankedMatches();

  it(`should return "${label.ferro}" when less than 10`, () => {
    expect(ranked.get(9)).toEqual(label.ferro);
  });
  it(`should return "${label.bronze}" when between 11 ~ 20`, () => {
    expect(ranked.get(15)).toEqual(label.bronze);
  });
  it(`should return "${label.prata}" when between 21 ~ 50`, () => {
    expect(ranked.get(30)).toEqual(label.prata);
  });
  it(`should return "${label.ouro}" when between 51 ~ 80`, () => {
    expect(ranked.get(60)).toEqual(label.ouro);
  });
  it(`should return "${label.diamante}" when between 81 ~ 90`, () => {
    expect(ranked.get(85)).toEqual(label.diamante);
  });
  it(`should return "${label.lendario}" when between 91 ~ 100`, () => {
    expect(ranked.get(96)).toEqual(label.lendario);
  });
  it(`should return "${label.imortal}" when greater than or equal 101`, () => {
    expect(ranked.get(105)).toEqual(label.imortal);
  });
  it(`should return "${label.unknown}" when it does not satisfy any condition`, () => {
    expect(ranked.get("michel")).toEqual(label.unknown);
  });
});
