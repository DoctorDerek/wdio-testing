const { SHORT_PAUSE_IN_MILLISECONDS } = require("./CONSTANTS")

describe("Browser Actions", async () => {
  it("Inputs", async () => {
    browser.url("https://devexpress.github.io/testcafe/example/")
    const input = await $("#developer-name")
    input.waitForExist()
    input.setValue("Mike")
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
    input.clearValue()
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
    input.addValue("Mike")
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })

  it("Checkboxes and Radio buttons", async () => {
    const radio = await $("#linux")
    radio.waitForExist()
    radio.click()
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)

    const checkbox = await $("#remote-testing")
    checkbox.waitForExist()
    checkbox.selectByVisibleText("JavaScript API")
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })
})
