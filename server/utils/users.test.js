const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Roland",
        room: "Tower"
      },
      {
        id: "2",
        name: "Jake",
        room: "Gato"
      },
      {
        id: "3",
        name: "Eddy",
        room: "Tower"
      }
    ];
  });

  it("should add new user", () => {
    let users = new Users();
    let user = {
      id: "123",
      name: "Morris",
      room: "Gato"
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toMatchObject([user]);
  });

  it("should remove a user", () => {
    let userId = "1";
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  it("should not remove user", () => {
    let userId = "99";
    let user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });
  it("should find user", () => {
    let userId = "2";
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });
  it("should not find user", () => {
    let userId = "99";
    let user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it("should return names for Tower room", () => {
    let userList = users.getUsersList("Tower");
    expect(userList).toEqual(["Roland", "Eddy"]);
  });
});
