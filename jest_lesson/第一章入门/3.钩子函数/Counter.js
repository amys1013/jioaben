class Counter {
  constructor() {
    this.number = 0;
  }
  addOne() {
    this.number++;
  }

  minOne() {
    this.number--;
  }

  addTwo() {
    this.number += 2;
  }

  minTwo() {
    this.number -= 2;
  }
}

export { Counter };
