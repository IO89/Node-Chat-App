[
  {
    id: "dwgqwgifqwkv",
    name: "Morris",
    room: "Gato"
  }
];

class Users{
    constructor () {
        this.users = [];
    }
    addUser (id,name,room) {
        let user = {id,name,room};
        this.users.push(user);
        return user;
    }
}

module.exports = {Users};




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

