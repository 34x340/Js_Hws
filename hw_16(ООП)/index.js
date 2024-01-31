// 1 //////

function Account({ login, email }) {
    this.login = login;
    this.email = email;
}
  
Account.prototype.getInfo = function () {
    alert(`Цей логін ${this.login} має таку пошту ${this.email}`)
};

console.log(Account.prototype.getInfo);

const man = new Account('David', 'david_1092@gmail.com');
man.getInfo()

const woman = new Account('Evelynn', 'evelynn@mail.com',);

woman.getInfo()

// 2 //////

class User {
    constructor(userName, userAge, userFollower) {
        this.name = userName;
        this.age = userAge;
        this.followers = userFollower
    }
    getInfo() {
        alert(`User ${this.name} is ${this.age} years old, and has ${this.followers} followers on instagram.`)
    }
}



const pasha = new User('pasha', 16, 2121);
   
pasha.getInfo();
   
const masha = new User('masha', 17, 386);
   

masha.getInfo();

// 3 //////

class Storage {
    constructor(initialItems) {
      this.items = [...initialItems];
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
}
  
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
  
const items = storage.getItems();
console.table(items); 
  
storage.addItem('Дроід');
console.table(storage.getItems()); 
  
storage.removeItem('Пролонгер');
console.table(storage.getItems());

// 4 //////

class StringBuilder {
    constructor(initialValue) {
      this._value = initialValue;
    }
  
    get value() {
      return this._value;
    }
  
    append(str) {
      this._value += str;
    }
  
    prepend(str) {
      this._value = str + this._value;
    }
  
    pad(str) {
      this.prepend(str);
      this.append(str);
    }
}
  
const builder = new StringBuilder('.');
  
builder.append('^');
console.log(builder.value);
  
builder.prepend('^');
console.log(builder.value); 
  
builder.pad('=');
console.log(builder.value);

// 5 //////

class Car {
    constructor({ maxSpeed, price }) {
      this.speed = 0;
      this.price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }
  
    static getSpecs(car) {
      console.log(`
        maxSpeed: ${car.maxSpeed},
        speed: ${car.speed},
        isOn: ${car.isOn},
        distance: ${car.distance},
        price: ${car.price}
      `);
    }
  
    get price() {
      return this._price;
    }
  
    set price(value) {
      this._price = value;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      }
    }
  
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
}
  
const maybach = new Car({ maxSpeed: 220, price: 20000000 });
  
maybach.turnOn();
maybach.accelerate(30);
maybach.drive(3);
Car.getSpecs(maybach);
 
  
maybach.decelerate(10);
maybach.drive(1);
maybach.turnOff();
Car.getSpecs(maybach);
 
console.log(maybach.price); 
maybach.price = 20000000;
console.log(maybach.price); 