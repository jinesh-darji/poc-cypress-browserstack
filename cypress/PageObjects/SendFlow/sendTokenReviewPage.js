class SendTokenReviewPage {
  btnExetuce = "//div[text()='Execute']";
  btnExetuceFail = "//div[text()='Estimation failed']";
  btnGoBack = "//button[text()='Go back']";
  lblTransactionCompleted = "//span[text()='Transaction completed']";
  lblTransactionCompleted_Polygon =
    "//span[text()='Polygon']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_BNBChain =
    "//span[text()='BNB Chain']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_GnosisChain =
    "//span[text()='Gnosis Chain']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_Optimism =
    "//span[text()='Optimism']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_Arbitrum =
    "//span[text()='Arbitrum']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionReverted = "//span[text()='Transaction reverted']";
  lblDuplicationAddress =
    "//span[text()='Destination address should not be the same as sender address']";
  btnLeave = "//button[text()='Leave']";
  btnEditTransaction =
    "//h3[text()='Send asset']//following-sibling::div//*[@color='#fff' and @fill='none']";
  lblPayingFeesWith = "//span[text()='Paying fees with']";
  lblPayingFeesWith_Matic =
    "//img[@alt='MATIC']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_Bnb =
    "//img[@alt='BNB']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_xDai =
    "//img[@alt='XDAI']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_Optimism =
    "(//img[@alt='ETH']//preceding-sibling::span[text()='Paying fees with'])[1]";
  lblPayingFeesWith_Arbitrum =
    "(//img[@alt='ETH']//preceding-sibling::span[text()='Paying fees with'])[2]";
  lblUSDC_TokenList = "//div[text()='USDC']";
  lblUSDT_TokenList = "//div[text()='USDT']";
  lblUSDC_TokenList_Polygon =
    "//span[text()='Polygon']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_BNBChain =
    "//span[text()='BNB Chain']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_GnosisChain =
    "//span[text()='Gnosis Chain']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_Optimism =
    "//span[text()='Optimism']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_Arbitrum =
    "//span[text()='Arbitrum']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";

  get payingFeesWith() {
    return cy.xpath(this.lblPayingFeesWith, { timeout: 30000 });
  }

  get payingFeesWith_Matic() {
    return cy.xpath(this.lblPayingFeesWith_Matic, { timeout: 30000 });
  }

  get payingFeesWith_Bnb() {
    return cy.xpath(this.lblPayingFeesWith_Bnb, { timeout: 30000 });
  }

  get payingFeesWith_xDai() {
    return cy.xpath(this.lblPayingFeesWith_xDai, { timeout: 30000 });
  }

  get payingFeesWith_Optimism() {
    return cy.xpath(this.lblPayingFeesWith_Optimism, { timeout: 30000 });
  }

  get payingFeesWith_Arbitrum() {
    return cy.xpath(this.lblPayingFeesWith_Arbitrum, { timeout: 30000 });
  }

  get USDC_TokenList() {
    return cy.xpath(this.lblUSDC_TokenList, { timeout: 30000 });
  }

  get USDT_TokenList() {
    return cy.xpath(this.lblUSDT_TokenList, { timeout: 30000 });
  }

  get USDC_TokenList_Polygon() {
    return cy.xpath(this.lblUSDC_TokenList_Polygon, { timeout: 30000 });
  }

  get USDC_TokenList_BNBChain() {
    return cy.xpath(this.lblUSDC_TokenList_BNBChain, { timeout: 30000 });
  }

  get USDC_TokenList_GnosisChain() {
    return cy.xpath(this.lblUSDC_TokenList_GnosisChain, { timeout: 30000 });
  }

  get USDC_TokenList_Optimism() {
    return cy.xpath(this.lblUSDC_TokenList_Optimism, { timeout: 30000 });
  }

  get USDC_TokenList_Arbitrum() {
    return cy.xpath(this.lblUSDC_TokenList_Arbitrum, { timeout: 30000 });
  }

  get execute() {
    return cy.xpath(this.btnExetuce, { timeout: 30000 });
  }

  get executeFail() {
    return cy.xpath(this.btnExetuceFail, { timeout: 30000 });
  }

  get goBack() {
    return cy.xpath(this.btnGoBack);
  }

  get transactionCompleted() {
    return cy.xpath(this.lblTransactionCompleted, { timeout: 300000 });
  }

  get transactionCompleted_Polygon() {
    return cy.xpath(this.lblTransactionCompleted_Polygon, { timeout: 300000 });
  }

  get transactionCompleted_BNBChain() {
    return cy.xpath(this.lblTransactionCompleted_BNBChain, { timeout: 300000 });
  }

  get transactionCompleted_GnosisChain() {
    return cy.xpath(this.lblTransactionCompleted_GnosisChain, {
      timeout: 300000,
    });
  }

  get transactionCompleted_Optimism() {
    return cy.xpath(this.lblTransactionCompleted_Optimism, { timeout: 300000 });
  }

  get transactionCompleted_Arbitrum() {
    return cy.xpath(this.lblTransactionCompleted_Arbitrum, { timeout: 300000 });
  }

  get transactionReverted() {
    return cy.xpath(this.lblTransactionReverted, { timeout: 300000 });
  }

  get duplicationAddress() {
    return cy.xpath(this.lblDuplicationAddress, { timeout: 300000 });
  }

  get editTransaction() {
    return cy.xpath(this.btnEditTransaction);
  }

  get leave() {
    return cy.xpath(this.btnLeave);
  }
}

let sendtokenreview = new SendTokenReviewPage();
export default sendtokenreview;
