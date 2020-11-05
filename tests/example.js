describe("Test the example website", async () => {
  it("Loads the example website", async () => {
    await browser.url("http://www.example.com")
  })
})

// no need for npx, though you would on the command line
// since it's not a dependency
