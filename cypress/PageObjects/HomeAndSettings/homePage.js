class HomePage {
  lblDeposit = "//span[text()='Deposit']";
  lblSend = "//span[text()='Send']";
  lblWithdraw = "//span[text()='Withdraw']";
  lblSwap = "//span[text()='Swap']";
  lblBridge = "//span[text()='Bridge']";
  btnSettings =
    "//span[text()='Wallet']//parent::span//parent::div//following-sibling::div[2]//div[2]";
  lblConnected = "//div[text()='Connected']";

  get homePage() {
    return cy.xpath(this.lblSend, { timeout: 300000 });
  }

  get connected() {
    return cy.xpath(this.lblConnected, { timeout: 300000 });
  }

  get deposit() {
    return cy.xpath(this.lblDeposit);
  }

  get send() {
    return cy.xpath(this.lblSend);
  }

  get withdraw() {
    return cy.xpath(this.lblWithdraw);
  }

  get swap() {
    return cy.xpath(this.lblSwap);
  }

  get bridge() {
    return cy.xpath(this.lblBridge);
  }

  get settings() {
    return cy.xpath(this.btnSettings);
  }
}

let home = new HomePage();
export default home;
