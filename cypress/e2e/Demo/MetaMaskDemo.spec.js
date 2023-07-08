import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";

describe("Smoke Test Case of the Send Native Token Flow with the Xdai Network", () => {
  before(() => {
    cy.disconnectAllAccountsFromAllDapps();
  });

  it("SMOKE: Perform the Send Native Token Transaction with single transaction on Xdai Network", () => {
    // perform the signin with metamask extention
    try {
      // Visit the root URL of the DApp
      cy.visit("/");

      // click on the web3 tab
      signin.web3Tab.click();

      // click on the matamask option
      signin.metaMask_Web3.click();

      // validate the home screen
      home.homePage.should("be.visible");
    } catch (e) {
      console.log(e);
      assert.fail("The signin with metamask is not completed.");
    }
  });
});
