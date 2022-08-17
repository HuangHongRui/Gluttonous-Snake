// 蛇类
export default class Snake {
  // 蛇元素
  snake: HTMLElement;
  head: HTMLElement;
  body: HTMLCollectionOf<HTMLElement>;

  constructor() {
    this.snake = document.getElementById("snake")!;
    this.head = this.snake.querySelector("div")!;
    this.body = this.snake.getElementsByTagName("div")!;
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了");
    }
    if (this.body[1] && this.body[1].offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkCrash();
  }

  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了");
    }
    if (this.body[1] && this.body[1].offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkCrash();
  }

  growth() {
    this.snake.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {
    // 从后往前移动
    for (let i = this.body.length - 1; i > 0; i--) {
      let X = this.body[i - 1].offsetLeft;
      let Y = this.body[i - 1].offsetTop;

      this.body[i].style.left = X + "px";
      this.body[i].style.top = Y + "px";
    }
  }

  checkCrash() {
    for (let i = 1; i < this.body.length; i++) {
      let section = this.body[i];
      if (this.X === section.offsetLeft && this.Y === section.offsetTop) {
        throw new Error("咬到自己啦！");
      }
    }
  }
}
