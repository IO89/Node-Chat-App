const expect = require("expect");

const { isRealString } = require("./validation");

describe("isRealString", () => {
  it("should reject non-string values", () => {
    let res = isRealString(89);
    expect(res).toBeFalsy();
  });

  it("should reject string with only spaces", () => {
    let res = isRealString("    ");
    expect(res).toBeFalsy();
  });

  it("should allow string with non-space characters", () => {
    let res = isRealString("   Morris   ");
    expect(res).toBeTruthy();
  });
});
