let importar = require("./collectibles.js");

let starWars = importar("Star Wars");
let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");

let unifiedCollectibles = [...starWars, ...hotToys, ...bandai];

let collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    this.figuras.forEach((item) => console.log(item.nombre));
  },
  figuresByBrand: function (marca) {
    return this.figuras.filter((item) => item.marca === marca);
  },
};

collectibles.listFigures();
console.log(collectibles.figuresByBrand("Hot Toys"));