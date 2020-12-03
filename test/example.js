import {
  MEDIUM_PAUSE_IN_MILLISECONDS,
  SHORT_PAUSE_IN_MILLISECONDS,
  MOBILE_DIMENSIONS,
  TABLET_DIMENSIONS,
  DESKTOP_DIMENSIONS,
} from "./CONSTANTS"

// @ts-check
/** @typedef {import('mocha')} */
/** @typedef {import('webdriverio')} */
// @ts-expect-error // because @wdio/mocha-framework is weird
/** @typedef {import('@wdio/mocha-framework')} */
describe("Test example.com", () => {
  it("Loads the page with correct URL & title", () => {
    browser.url("https://www.example.com")
    browser.pause(MEDIUM_PAUSE_IN_MILLISECONDS) // Avoid this in favor of .waitForExist()
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
})

describe("Test testcafe example", () => {
  it("Has a submit attribute on #submit-button", async () => {
    browser.url("https://devexpress.github.io/testcafe/example/")
    const button = await $("#submit-button")
    button.waitForExist()
    expect(button).toHaveAttrContaining("type", "submit")
  })

  it("Has a button #populate with text Populate", async () => {
    const button = await $("#populate")
    button.waitForExist()
    expect(button).toHaveValue("Populate")
  })

  it("Overwrites the screenshot", async () => {
    browser.saveScreenshot("screenshot-from-wdio.png")
  })

  it("Changes the viewport", () => {
    browser.setWindowSize(800, 600)
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })

  it("Changes the viewport to mobile", () => {
    const [width, height] = MOBILE_DIMENSIONS
    browser.setWindowSize(width, height)
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })

  it("Changes the viewport to tablet", () => {
    const [width, height] = TABLET_DIMENSIONS
    browser.setWindowSize(width, height)
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })

  it("Changes the viewport to desktop", () => {
    const [width, height] = DESKTOP_DIMENSIONS
    browser.setWindowSize(width, height)
    browser.pause(SHORT_PAUSE_IN_MILLISECONDS)
  })
})
