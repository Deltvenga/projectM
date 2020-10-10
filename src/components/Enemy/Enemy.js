export class Enemy {
  constructor(type, name) {
    this.stats = {
      name: name,
      speed: 10,
      hp: 10,
      agrRadious: 50,
    };
    this.coords = {
      posX: Math.random() * 500,
      posY: Math.random() * 500,
    };
    this.size = {
      width: 50,
      height: 50,
    };
    this.type = type;
  }
}
