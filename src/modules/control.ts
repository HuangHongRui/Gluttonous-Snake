import Food from "./food";
import Panel from "./panel";
import Snake from "./snake";

export default class Control {
  snake: Snake;
  food: Food;
  panel: Panel;
  direction: string = "";
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.panel = new Panel(10, 2);
    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    console.log(event.key);
    this.direction = event.key;
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    if (this.isEating(X, Y)) {
      this.food.change();
      this.snake.growth();
      this.panel.addScore();
    }

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (err: any) {
      alert(err.message);
      this.isLive = false;
    }

    this.isLive && setTimeout(() => this.run(), 300 - (this.panel.level - 1) *30);
  }

  // 是否吃到食物
  isEating(X: number, Y: number) {
    return X === this.food.X && Y === this.food.Y;
  }
}
