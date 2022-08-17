export default class Food {
  element: HTMLElement;
  constructor() {
    // 获取页面中的food 且赋值给element
    this.element = document.getElementById("food")!;
  }

  // 获取食物X轴坐标
  get X() {
    return this.element.offsetLeft;
  }

  // 获取食物Y轴坐标
  get Y() {
    return this.element.offsetTop;
  }

  // 随机修改食物位置 位置 0 ~ 290
  // 蛇移动单位：10
  // 食物单位：10 取整
  change() {
    const left = Math.round(Math.random() * 29) * 10;
    const right = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = right + "px";
  }
}
