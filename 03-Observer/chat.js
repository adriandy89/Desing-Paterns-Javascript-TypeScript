// Observer
class User {
  constructor(name) {
    this.name = name;
  }
  update(message) {
    console.log(`${this.name} received a new message: ${message}`);
  }
}
// Subject
class ChatRoom {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  sendMessage(message) {
    for (const user of this.users) {
      user.update(message);
    }
  }
}
// Usage
const chatRoom = new ChatRoom();
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);
chatRoom.sendMessage("Hello, everyone!");

// TODO - explain
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
