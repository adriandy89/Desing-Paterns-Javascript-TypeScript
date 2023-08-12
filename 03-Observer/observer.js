// Observer
class Observer {
  update(value) {
    console.log("Received an update:", value);
  }
}
// Subject
class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(value) {
    for (const observer of this.observers) {
      observer.update(value);
    }
  }
}
// Usage
const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

const value = "Hello, observers!";

subject.notifyObservers(value);
