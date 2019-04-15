describe("My first test", function() {
  it("does not much", function() {
    expect(true).to.equal(true)
  })
  it("visit the page", function(){
    cy.visit('http://localhost:3000/')
  })
})

describe("To do/Not to do tests", function(){
  it("contains textarea and type a question", function(){
    cy.get("textarea").type("Should I write more tests?")
  })
  it("click on deside", function() {
    cy.get("button").click()
  })
  it("shows a result", function() {
    cy.get("h2").contains("!")
  })
  it("log a result", function() {
    cy.log("Processing...").pause()
  })
})