let { readFileSync } = require("fs");

function importar(marca) {
  switch (marca) {
    case "Hot Toys":
      return JSON.parse(readFileSync("./figura1.JSON", "utf-8"));
    case "Bandai":
      return JSON.parse(readFileSync("./figura2.JSON", "utf-8"));
    case "Star Wars":
      return JSON.parse(readFileSync("./figura3.JSON", "utf-8"));
  }
}

module.exports = importar;