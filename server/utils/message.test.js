const expect = require("expect");

const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    let from = "Morris";
    let text = "Some text";
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  });
});

describe("generatelocationMessage", () => {
  it("should generate correct location object", () => {
    let from = "Morris";
    let latitude = 12;
    let longitude = 18;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let location = generateLocationMessage(from, latitude, longitude);

    expect(typeof location.createdAt).toBe("number");

    expect(location.url).toBe(url);
    expect(location).toMatchObject({ from, url });
  });
});
