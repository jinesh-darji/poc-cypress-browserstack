class SendTokenPage {
  lblSendToken = "//h3[text()='Send asset']";
  btnKeyBased = "//div[text()='Key based']";
  btnSmartWallet = "//div[text()='Smart Wallet']";
  lblSelectChaiAndToken = "//div[text()='Select chain and token']";
  lblEthereum_ChainList =
    "//img[@alt='Ethereum']//parent::div[text()='Ethereum']";
  lblPolygon_ChainList = "//img[@alt='Polygon']//parent::div[text()='Polygon']";
  lblBNBChain_ChainList =
    "//img[@alt='BNB Chain']//parent::div[text()='BNB Chain']";
  lblGnosisChain_ChainList =
    "//img[@alt='Gnosis Chain']//parent::div[text()='Gnosis Chain']";
  lblAvalanche_ChainList =
    "//img[@alt='Avalanche']//parent::div[text()='Avalanche']";
  lblOptimism_ChainList =
    "//img[@alt='Optimism']//parent::div[text()='Optimism']";
  lblArbitrum_ChainList =
    "//img[@alt='Arbitrum']//parent::div[text()='Arbitrum']";
  lblAurora_ChainList = "//img[@alt='Aurora']//parent::div[text()='Aurora']";
  lblFantom_ChainList = "//img[@alt='Fantom']//parent::div[text()='Fantom']";
  lblMoonbeam_ChainList =
    "//img[@alt='Moonbeam']//parent::div[text()='Moonbeam']";
  lblCELO_ChainList = "//img[@alt='CELO']//parent::div[text()='CELO']";
  txtReceiverAddress =
    "//label[text()='Receiver address']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtReceiverAddressClear =
    "//label[text()='Receiver address']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  lblUSDC_TokenList = "//img[@alt='USDC']";
  lblUSDT_TokenList = "//img[@alt='USDT']";
  lblMatic_TokenList =
    "//img[@alt='Matic']//following-sibling::div//div[text()='Matic']";
  lblBNB_TokenList =
    "(//img[@alt='BNB']//following-sibling::div//div[text()='BNB'])[1]";
  lblxDAI_TokenList =
    "//img[@alt='xDAI']//following-sibling::div//div[text()='xDAI']";
  lblOptimism_TokenList =
    "//img[@alt='Optimism']//following-sibling::div//div[text()='Optimism']";
  lblArbitrum_TokenList =
    "//img[@alt='Arbitrum']//following-sibling::div//div[text()='Arbitrum']";
  txtYouSend =
    "//label[text()='You send']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtYouSendClear =
    "//label[text()='You send']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  btnReview = "//div[text()='Review']";
  btnSave = "//div[text()='Save']";
  btnGoBackToPreview = "//button[text()='Go back to preview']";
  btnAddTransaction = "//span[text()='Add transaction']";
  lblAssertBridge = "//div[text()='Asset bridge']";
  lblSendAsset = "//div[text()='Send asset']";
  lblSwapAsset = "//div[text()='Swap asset']";
  lblKlimaStaking = "//div[text()='Klima Staking']";
  lblPillarDAONFTMembership = "//div[text()='Pillar DAO NFT Membership']";
  lblPLRStaking = "//div[text()='PLR Staking']";

  get sendTokenScreen() {
    return cy.xpath(this.lblSendToken);
  }

  get keyBasedTab() {
    return cy.xpath(this.btnKeyBased);
  }

  get smartWalletTab() {
    return cy.xpath(this.btnSmartWallet);
  }

  get selectChaiAndToken() {
    return cy.xpath(this.lblSelectChaiAndToken);
  }

  get ethereum_ChainList() {
    return cy.xpath(this.lblEthereum_ChainList, { timeout: 300000 });
  }

  get polygon_ChainList() {
    return cy.xpath(this.lblPolygon_ChainList, { timeout: 300000 });
  }

  get bNBChain_ChainList() {
    return cy.xpath(this.lblBNBChain_ChainList, { timeout: 300000 });
  }

  get gnosisChain_ChainList() {
    return cy.xpath(this.lblGnosisChain_ChainList, { timeout: 300000 });
  }

  get avalanche_ChainList() {
    return cy.xpath(this.lblAvalanche_ChainList, { timeout: 300000 });
  }

  get optimism_ChainList() {
    return cy.xpath(this.lblOptimism_ChainList, { timeout: 300000 });
  }

  get arbitrum_ChainList() {
    return cy.xpath(this.lblArbitrum_ChainList, { timeout: 300000 });
  }

  get aurora_ChainList() {
    return cy.xpath(this.lblAurora_ChainList, { timeout: 300000 });
  }

  get fantom_ChainList() {
    return cy.xpath(this.lblFantom_ChainList, { timeout: 300000 });
  }

  get moonbeam_ChainList() {
    return cy.xpath(this.lblMoonbeam_ChainList, { timeout: 300000 });
  }

  get cELO_ChainList() {
    return cy.xpath(this.lblCELO_ChainList, { timeout: 300000 });
  }

  get receiverAddress() {
    return cy.xpath(this.txtReceiverAddress);
  }

  get receiverAddressClear() {
    return cy.xpath(this.txtReceiverAddressClear);
  }

  get matic_TokenList() {
    return cy.xpath(this.lblMatic_TokenList, { timeout: 300000 });
  }

  get uSDC_TokenList() {
    return cy.xpath(this.lblUSDC_TokenList, { timeout: 300000 });
  }

  get uSDT_TokenList() {
    return cy.xpath(this.lblUSDT_TokenList, { timeout: 300000 });
  }

  get bNB_TokenList() {
    return cy.xpath(this.lblBNB_TokenList, { timeout: 300000 });
  }

  get xDAI_TokenList() {
    return cy.xpath(this.lblxDAI_TokenList, { timeout: 300000 });
  }

  get optimism_TokenList() {
    return cy.xpath(this.lblOptimism_TokenList, { timeout: 300000 });
  }

  get arbitrum_TokenList() {
    return cy.xpath(this.lblArbitrum_TokenList, { timeout: 300000 });
  }

  get youSend() {
    return cy.xpath(this.txtYouSend);
  }

  get youSendClear() {
    return cy.xpath(this.txtYouSendClear);
  }

  get review() {
    return cy.xpath(this.btnReview, { timeout: 300000 });
  }

  get save() {
    return cy.xpath(this.btnSave, { timeout: 300000 });
  }

  get goBackToPreview() {
    return cy.xpath(this.btnGoBackToPreview);
  }

  get review() {
    return cy.xpath(this.btnReview, { timeout: 10000 });
  }

  get addTransaction() {
    return cy.xpath(this.btnAddTransaction);
  }

  get assertBridg() {
    return cy.xpath(this.lblAssertBridge);
  }

  get sendAsset() {
    return cy.xpath(this.lblSendAsset);
  }

  get swapAsset() {
    return cy.xpath(this.lblSwapAsset);
  }

  get klimaStaking() {
    return cy.xpath(this.lblKlimaStaking);
  }

  get pillarDAONFTMembership() {
    return cy.xpath(this.lblPillarDAONFTMembership);
  }

  get pLRStaking() {
    return cy.xpath(this.lblPLRStaking);
  }
}

let sendtoken = new SendTokenPage();
export default sendtoken;
