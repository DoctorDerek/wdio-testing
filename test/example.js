// @ts-check
/** @typedef {import('mocha')} */
/** @typedef {import('webdriverio')} */
// @ts-expect-error // because @wdio/mocha-framework is weird
/** @typedef {import('@wdio/mocha-framework')} */
describe("Test example.com", () => {
  it("Loads the page with correct URL & title", () => {
    browser.url("https://www.example.com")
    browser.pause(3000) // Avoid this in favor of .waitForExist()
    expect(browser).toHaveUrl("https://www.example.com")
    expect(browser).toHaveTitle("Example Domain")
  })

  it("Has a visible h1 element", async () => {
    const h1 = await $("h1")
    h1.waitForExist()
    expect(h1).toBeVisible
  })

  it("Has a visible p element", async () => {
    const p = await $("p")
    p.waitForExist()
    expect(p).toBeVisible
  })

  it("Has the correct text in h1", async () => {
    const h1 = await $("h1")
    h1.waitForExist()
    expect(h1).toHaveText("Example Domain")
  })

  it("Has a submit attribute on #submit-button", async () => {
    browser.url("https://devexpress.github.io/testcafe/example/")
    const button = await $("#submit-button")
    button.waitForExist()
    expect(button).toHaveAttrContaining("type", "submit")
  })
})
