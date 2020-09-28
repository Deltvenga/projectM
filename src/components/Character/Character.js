export class Character {
  constructor() {}
  size = {
    width: 50,
    height: 50,
  };
  stats = {};
  coords = {
    posX: 100,
    posY: 100,
  };
  getCoords() {
    return this.coords;
  }
  getStats() {
    return this.stats;
  }
  getSize() {
    return this.size;
  }
}
