export class Enemy {
  constructor(type) {
    this.stats = {
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
