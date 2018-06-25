[
  {
    id: "dwgqwgifqwkv",
    name: "Morris",
    room: "Gato"
  }
];

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    let user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }
  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }
  getUsersList(room) {
    let users = this.users.filter(user => user.room === room);
    let nameArray = users.map(user => user.name);

    return nameArray;
  }
}

module.exports = { Users };

// class Person{
//     constructor (name,age){
//     this.name = name;
//     this.age = age;
//     }
//     getUserDescription (){
//         return `${this.name} is ${this.age} years old.`
//     }
// }

// const mao = new Person("Morris",4);
// const description = me.getUserDescription();
