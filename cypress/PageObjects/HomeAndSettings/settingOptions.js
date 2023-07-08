class SettingOptions {
  btnDashboard = "//a[text()='Dashboard']";
  btnProfile = "//div[text()='Profile']";
  btnHistory = "//div[text()='History']";
  btnDeployments = "//div[text()='Deployments']";
  btnTheme = "//div[text()='Theme']";
  btnSystemInfo = "//div[text()='System Info']";
  btnEnvironment = "//div[text()='Environment']";
  btnAboutEtherspot = "//a[text()='About Etherspot']";
  btnLogout = "//div[text()='Logout']";

  get dashboardOption() {
    return cy.xpath(this.btnDashboard);
  }

  get profileOption() {
    return cy.xpath(this.btnProfile);
  }

  get historyOption() {
    return cy.xpath(this.btnHistory);
  }

  get deploymentsOption() {
    return cy.xpath(this.btnDeployments);
  }

  get themeOption() {
    return cy.xpath(this.btnTheme);
  }

  get systemInfoOption() {
    return cy.xpath(this.btnSystemInfo);
  }

  get environmentOption() {
    return cy.xpath(this.btnEnvironment);
  }

  get aboutEthersportOption() {
    return cy.xpath(this.btnAboutEtherspot);
  }

  get logoutOption() {
    return cy.xpath(this.btnLogout, { timeout: 5000 });
  }
}

let settingoptions = new SettingOptions();
export default settingoptions;
