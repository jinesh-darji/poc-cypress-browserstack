class SigninPage {
  lblSignin = "//h1[text()='Sign in']";
  btnSocialTab = "//div[text()='Social']";
  btnGoogle = "Google";
  btnApple = "Apple";
  btnFacebook = "Facebook";
  btnDiscord = "Discord";
  btnTwitter = "Twitter";
  btnEmail = "Email";
  btnGitHub = "GitHub";
  btnTwitch = "Twitch";
  btnWeb3Tab = "//div[text()='Web3']";
  btnMetaMask = "MetaMask";
  btnCoinbaseWallet = "Coinbase Wallet";
  btnWalletConnect = "WalletConnect";
  lnkShowMore = "//p[text()='more']";
  lnkShowLess = "//p[text()='less']";

  get openURL() {
    return cy;
  }

  get signInPage() {
    return cy.xpath(this.lblSignin);
  }

  get socialTab() {
    return cy.xpath(this.btnSocialTab);
  }

  get google_Social() {
    return cy.contains(this.btnGoogle);
  }

  get apple_Social() {
    return cy.contains(this.btnApple);
  }

  get facebook_Social() {
    return cy.contains(this.btnFacebook);
  }

  get discord_Social() {
    return cy.contains(this.btnDiscord);
  }

  get twitter_Social() {
    return cy.contains(this.btnTwitter);
  }

  get email_Social() {
    return cy.contains(this.btnEmail);
  }

  get gitHub_Social() {
    return cy.contains(this.btnGitHub);
  }

  get twitch_Social() {
    return cy.contains(this.btnTwitch);
  }

  get web3Tab() {
    return cy.xpath(this.btnWeb3Tab);
  }

  get metaMask_Web3() {
    return cy.contains(this.btnMetaMask);
  }

  get coinbaseWallet_Web3() {
    return cy.contains(this.btnCoinbaseWallet);
  }

  get walletConnect_Web3() {
    return cy.contains(this.btnWalletConnect);
  }

  get showMore() {
    return cy.xpath(this.lnkShowMore);
  }

  get showLess() {
    return cy.xpath(this.lnkShowLess);
  }
}

let signin = new SigninPage();
export default signin;
