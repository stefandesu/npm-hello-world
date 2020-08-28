const assert = require("assert")
const hw = require("../index")

describe("Index", () => {
  describe("hello", () => {
    it("should return world", () => {
      assert.equal(hw.hello, "world")
    })
  })
})
